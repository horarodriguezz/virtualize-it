import { useCallback, useRef } from "react";

export default function useThrottledFunction(
  callback: () => void,
  delay: number = 300
): () => void {
  const timeoutRef = useRef<number | null>(null);

  return useCallback(() => {
    if (timeoutRef.current === null) {
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        callback();
      }, delay);
    }
  }, [callback, delay]);
}
