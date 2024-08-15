import React from "react";

import { FixedListProps } from "../types";

import useScrollMetrics from "../../hooks/use-scroll-metrics/useScrollMetrics";
import useInitialScroll from "../../hooks/use-initial-scroll/useInitialScroll";
import getListEnds from "../../functions/getListEnds";
import Box from "../Box";
import getContainerStyles from "../../functions/styles/getContainerStyles";
import getWrapperStyles from "../../functions/styles/getWrapperStyles";

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

  const isVertical = orientation === "vertical";

  const [metrics, elementRef] = useScrollMetrics();

  const {
    height: containerHeight,
    width: containerWidth,
    scrollTop,
    scrollLeft,
  } = metrics;

  useInitialScroll({ elementRef, orientation, reverse });

  const containerSize = isVertical ? containerHeight : containerWidth;

  const scrollDistance = isVertical ? scrollTop : scrollLeft;

  const totalItemSize = itemSize + gap;

  const wrapperSize = totalElements * itemSize + (totalElements - 1) * gap;

  const { start, end } = getListEnds({
    itemSize: totalItemSize,
    listSize: containerSize,
    overscan: overscanCount,
    scrollDistance,
    totalElements,
  });

  return (
    <div
      style={getContainerStyles({ width, height })}
      className={"list-root"}
      ref={elementRef}
    >
      <div
        style={getWrapperStyles({ isVertical, totalSize: wrapperSize })}
        className={"list-root__wrapper"}
      >
        {children.slice(start, end + 1).map((child, index) => (
          <Box
            key={index}
            isVertical={isVertical}
            offset={(start + index) * totalItemSize}
          >
            {child}
          </Box>
        ))}
      </div>
    </div>
  );
}

export const FixedList = React.memo(List);
