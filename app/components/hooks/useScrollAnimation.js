// app/hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px 0px' }
    );

    elementsRef.current.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const registerElement = (index) => (element) => {
    elementsRef.current[index] = element;
  };

  return { registerElement };
}