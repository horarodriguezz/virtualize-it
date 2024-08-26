import React, { useMemo } from "react";
import { DynamicListProps } from "../types";
import useScrollMetrics from "../../hooks/use-scroll-metrics/useScrollMetrics";
import calculateNodesPosition from "../../functions/calculateNodesPosition";
import findFirstAfter from "../../functions/findFirstAfter";
import useInitialScroll from "../../hooks/use-initial-scroll/useInitialScroll";
import Box from "../Box";
import getContainerStyles from "../../functions/styles/getContainerStyles";
import getWrapperStyles from "../../functions/styles/getWrapperStyles";
import getValidChildren from "../../functions/getValidChildren";

function List(dynamicListProps: DynamicListProps) {
  const {
    children,
    width,
    height,
    gap,
    overscanCount = 3,
    orientation = "vertical",
    reverse = false,
    getItemSize,
  } = dynamicListProps;

  const validChildren = useMemo(() => getValidChildren(children), [children]);

  console.log("validChildren", validChildren);

  const isVertical = orientation === "vertical";

  const nodesPosition = useMemo(
    () => calculateNodesPosition(validChildren, gap, getItemSize),
    [validChildren, gap, getItemSize]
  );

  const [
    { scrollTop, scrollLeft, width: containerWidth, height: containerHeight },
    elementRef,
  ] = useScrollMetrics();

  useInitialScroll({ elementRef, orientation, reverse });

  const containerSize = isVertical ? containerHeight : containerWidth;

  const scroll = isVertical ? scrollTop : scrollLeft;

  const wrapperSize =
    nodesPosition[nodesPosition.length - 1] +
    getItemSize(nodesPosition.length - 1);

  const firstVisibleNode = findFirstAfter(scroll, nodesPosition);
  const startNode = Math.max(0, firstVisibleNode - overscanCount);

  const lastVisibleNode = findFirstAfter(scroll + containerSize, nodesPosition);

  const endNode = Math.min(
    validChildren.length - 1,
    lastVisibleNode + overscanCount
  );

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
        {validChildren.slice(startNode, endNode + 1).map((c, index) => (
          <Box
            key={index}
            isVertical={isVertical}
            offset={nodesPosition[startNode + index]}
          >
            {c}
          </Box>
        ))}
      </div>
    </div>
  );
}

export const DynamicList = React.memo(List);
