import React, { useCallback, useEffect, useState } from "react";
import { ScrollMetrics, ScrollMetricsResult } from "./types";

const initialSize: ScrollMetrics = {
  width: 0,
  height: 0,
  scrollTop: 0,
  scrollLeft: 0,
};

/**
 * @description this hook is used to get the size of an element, it will return the width and height of the element
 * and it will also update the size of the element when the window is resized
 */
export default function useScrollMetrics(): ScrollMetricsResult {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const animationFrame = React.useRef<number | null>(null);

  const [size, setSize] = useState<ScrollMetrics>(initialSize);

  const handleResize = useCallback(() => {
    if (animationFrame?.current) {
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
