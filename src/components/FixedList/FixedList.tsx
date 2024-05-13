import React, { useMemo } from "react";

import { FixedListProps } from "../types";

import useScrollMetrics from "../../hooks/use-scroll-metrics/useScrollMetrics";
import useInitialScroll from "../../hooks/use-initial-scroll/useInitialScroll";
import getListEnds from "../../functions/getListEnds";

function List(dynamicListProps: FixedListProps) {
  const {
    children,
    width,
    height,
    overscanCount = 3,
    totalElements,
    itemSize,
    gap = 0,
    orientation = "vertical",
    reverse = false,
  } = dynamicListProps;

  const [metrics, elementRef] = useScrollMetrics();
  const {
    height: containerHeight,
    width: containerWidth,
    scrollTop,
    scrollLeft,
  } = metrics;

  const isVertical = orientation === "vertical";

  const containerSize = useMemo(
    () => (isVertical ? containerHeight : containerWidth),
    [containerHeight, containerWidth, isVertical]
  );

  const scrollDistance = isVertical ? scrollTop : scrollLeft;

  const totalItemSize = itemSize + gap;

  const { start, end } = getListEnds({
    itemSize: totalItemSize,
    listSize: containerSize,
    overscan: overscanCount,
    scrollDistance,
    totalElements,
  });

  const visibleNodes = children.slice(start, end + 1).map((child, index) =>
    React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        position: "absolute",
        top: 0,
        left: 0,
        transform: isVertical
          ? `translateY(${(start + index) * totalItemSize}px)`
          : `translateX(${(start + index) * totalItemSize}px)`,
      },
    })
  );

  const containerStyle = useMemo(
    () => ({
      width: width ?? "100%",
      height: height ?? "100%",
      overflow: "auto",
    }),
    [width, height]
  );

  const wrapperStyles = useMemo((): React.CSSProperties => {
    const wrapperSize = totalElements * itemSize + (totalElements - 1) * gap;

    return {
      height: isVertical ? wrapperSize : "100%",
      width: !isVertical ? wrapperSize : "100%",
      flexDirection: !isVertical ? "row" : "column",
      display: "flex",
      position: "relative",
      overflow: "hidden",
    };
  }, [totalElements, itemSize, gap, isVertical]);

  useInitialScroll({ elementRef, orientation, reverse });

  return (
    <div style={containerStyle} className={"list_root"} ref={elementRef}>
      <div style={wrapperStyles} className={"list-root__wrapper"}>
        {visibleNodes}
      </div>
    </div>
  );
}

export const FixedList = React.memo(List);
