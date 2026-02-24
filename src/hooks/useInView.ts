import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Hook to detect when an element enters the viewport
 * Used for scroll-triggered animations
 */
export function useInView(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null!);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}
