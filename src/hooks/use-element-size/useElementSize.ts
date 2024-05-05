import { useEffect, useRef, useState } from "react";
import { ElementSize, UseElementSizeResult } from "./types";
import useThrottledFunction from "../use-throttled-callback/useThrottledCallback";

const initialSize: ElementSize = {
  width: 0,
  height: 0,
  scrollTop: 0,
};

/**
 * @description this hook is used to get the size of an element, it will return the width and height of the element
 * and it will also update the size of the element when the window is resized
 */
export default function useElementSize(): UseElementSizeResult {
  const elementRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState<ElementSize>(initialSize);

  const handleResize = useThrottledFunction(() => {
    if (elementRef.current) {
      setSize({
        width: elementRef.current.offsetWidth,
        height: elementRef.current.offsetHeight,
        scrollTop: elementRef.current.scrollTop,
      });
    }
  }, 50);

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

  return [size, elementRef];
}
