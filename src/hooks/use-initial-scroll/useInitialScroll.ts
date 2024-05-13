import { useEffect } from "react";
import { InitialScrollOptions } from "./types";

export default function useInitialScroll(options: InitialScrollOptions) {
  const { elementRef, orientation, reverse } = options;

  useEffect(() => {
    const isVertical = orientation === "vertical";

    if (elementRef.current && isVertical && reverse) {
      elementRef.current.scrollTop = elementRef.current.scrollHeight;
    }

    if (elementRef.current && !isVertical && reverse) {
      elementRef.current.scrollLeft = elementRef.current.scrollWidth;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
