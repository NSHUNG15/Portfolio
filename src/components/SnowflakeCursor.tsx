import { useEffect, useRef } from 'react';
import { useTheme } from '../context/theme';

interface Snowflake {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  life: number;
  maxLife: number;
  angle: number;
  spin: number;
}

const SnowflakeCursor: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakes = useRef<Snowflake[]>([]);
  const mouse = useRef({ x: -1000, y: -1000, isMoving: false });
  const timeoutRef = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // const pointerCoarse = window.matchMedia('(pointer: coarse)').matches;
    // if (prefersReducedMotion || pointerCoarse) {
    //   canvas.style.display = 'none';
    //   return;
    // }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.max(window.devicePixelRatio || 1, 1);

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const currentCtx = canvas.getContext('2d');
      if (currentCtx) {
        currentCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, { passive: true });

    let isAnimating = false;

    const createSnowflake = (x: number, y: number) => {
      // Limit number of snowflakes for performance
      if (snowflakes.current.length >= 48) return;

      const radius = Math.random() * 2.5 + 1.2; // 1.2 to 3.7px
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.2 + 0.7;
      
      snowflakes.current.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.6, // slight downward drift
        radius,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 40 + 35, // 35 to 75 frames
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.18
      });

      if (!isAnimating) {
        isAnimating = true;
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();

      if (now - lastSpawnRef.current < 24) return;
      lastSpawnRef.current = now;
      mouse.current.x = x;
      mouse.current.y = y;
      mouse.current.isMoving = true;
      createSnowflake(x, y);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        mouse.current.isMoving = false;
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const drawSnowflake = (ctx: CanvasRenderingContext2D, s: Snowflake) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.angle);
      ctx.globalCompositeOperation = 'lighter';

      ctx.beginPath();
      ctx.arc(0, 0, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = theme === 'dark' 
        ? `rgba(200, 225, 255, ${s.alpha})` // Brighter on dark mode
        : `rgba(66, 153, 225, ${Math.min(s.alpha * 1.2, 1)})`; // More visible on light mode
      ctx.fill();
      
      if (s.radius > 1.5) {
        ctx.strokeStyle = theme === 'dark'
          ? `rgba(255, 255, 255, ${Math.min(s.alpha, 0.9)})`
          : `rgba(59, 130, 246, ${Math.min(s.alpha, 0.8)})`;
        ctx.lineWidth = 0.6;
        
        ctx.beginPath();
        ctx.moveTo(-s.radius * 1.5, 0);
        ctx.lineTo(s.radius * 1.5, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, -s.radius * 1.5);
        ctx.lineTo(0, s.radius * 1.5);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = snowflakes.current.length - 1; i >= 0; i--) {
        const p = snowflakes.current[i];
        p.life++;
        p.alpha = 1 - (p.life / p.maxLife);

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.angle += p.spin;

        const outOfBounds = p.x < -50 || p.x > width + 50 || p.y > height + 50;
        if (p.alpha <= 0 || p.life >= p.maxLife || outOfBounds) {
          snowflakes.current.splice(i, 1);
        } else {
          drawSnowflake(ctx, p);
        }
      }

      if (snowflakes.current.length > 0) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        isAnimating = false;
        animationFrameId.current = null;
      }
    };

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [theme]); // Add theme to dependency array so it updates

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'normal' }}
    />
  );
};

export default SnowflakeCursor;
