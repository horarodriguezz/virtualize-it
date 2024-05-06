import { useCallback, useEffect, useRef, useState } from "react";
import { ElementSize, UseElementSizeResult } from "./types";

const initialSize: ElementSize = {
  width: 0,
  height: 0,
  scrollTop: 0,
  scrollLeft: 0,
};

/**
 * @description this hook is used to get the size of an element, it will return the width and height of the element
 * and it will also update the size of the element when the window is resized
 */
export default function useElementSize(): UseElementSizeResult {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | null>(null);

  const [size, setSize] = useState<ElementSize>(initialSize);

  const handleResize = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(() => {
      if (elementRef.current) {
        setSize({
          width: elementRef.current.offsetWidth,
          height: elementRef.current.offsetHeight,
          scrollTop: elementRef.current.scrollTop,
          scrollLeft: elementRef.current.scrollLeft,
        });
      }
    });
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    element?.addEventListener("resize", handleResize);

    return () => {
      element?.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const element = elementRef.current;

    element?.addEventListener("scroll", handleResize);

    return () => {
      element?.removeEventListener("scroll", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  return [size, elementRef];
}
