import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

interface UseInViewReturn {
  ref: RefObject<HTMLElement>;
  inView: boolean;
}

export const useInView = ({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '0px',
}: UseInViewOptions = {}): UseInViewReturn => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const enteredView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting || !triggerOnce || !enteredView.current) {
          setInView(isIntersecting);
          
          if (isIntersecting && triggerOnce) {
            enteredView.current = true;
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, inView };
};