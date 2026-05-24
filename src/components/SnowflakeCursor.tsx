import React, { useEffect, useRef } from 'react';
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
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let isAnimating = false;

    const createSnowflake = (x: number, y: number) => {
      // Limit number of snowflakes for performance
      if (snowflakes.current.length > 36) return;

      const radius = Math.random() * 2 + 1; // 1 to 3px
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      
      snowflakes.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.5, // slight downward drift
        radius,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 30 + 30, // 30 to 60 frames
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.2
      });

      if (!isAnimating) {
        isAnimating = true;
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.isMoving = true;

      const now = performance.now();
      if (now - lastSpawnRef.current < 24) return;
      lastSpawnRef.current = now;
      createSnowflake(e.clientX, e.clientY);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        mouse.current.isMoving = false;
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawSnowflake = (ctx: CanvasRenderingContext2D, s: Snowflake) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.angle);
      
      ctx.beginPath();
      ctx.arc(0, 0, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = theme === 'dark' 
        ? `rgba(167, 203, 255, ${s.alpha})` // Light blue glow for dark mode
        : `rgba(130, 175, 255, ${s.alpha * 0.8})`; // Pastel blue for light mode
      ctx.fill();
      
      // Draw a subtle cross for snowflake shape if radius is large enough
      if (s.radius > 1.5) {
        ctx.strokeStyle = theme === 'dark'
          ? `rgba(255, 255, 255, ${s.alpha * 0.8})`
          : `rgba(100, 150, 255, ${s.alpha * 0.6})`;
        ctx.lineWidth = 0.5;
        
        ctx.beginPath();
        ctx.moveTo(-s.radius * 1.5, 0);
        ctx.lineTo(s.radius * 1.5, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, -s.radius * 1.5);
        ctx.lineTo(0, s.radius * 1.5);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-s.radius, -s.radius);
        ctx.lineTo(s.radius, s.radius);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-s.radius, s.radius);
        ctx.lineTo(s.radius, -s.radius);
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

        if (p.alpha <= 0 || p.life >= p.maxLife) {
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
