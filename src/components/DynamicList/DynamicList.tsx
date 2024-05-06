import React, { useMemo } from "react";
import { DynamicListProps } from "../types";
import useElementSize from "../../hooks/use-element-size/useElementSize";
import calculateNodesPosition from "../../functions/calculateNodesPosition";
import findFirstAfter from "../../functions/findFirstAfter";

function List(dynamicListProps: DynamicListProps) {
  const {
    children,
    width,
    height,
    gap,
    overscanCount = 3,
    orientation = "vertical",
    getItemSize,
  } = dynamicListProps;

  const isVertical = orientation === "vertical";

  const [
    { scrollTop, scrollLeft, width: containerWidth, height: containerHeight },
    elementRef,
  ] = useElementSize();

  const nodesPosition = calculateNodesPosition(children, gap, getItemSize);

  const containerSize = useMemo(
    () => (isVertical ? containerHeight : containerWidth),
    [containerHeight, containerWidth, isVertical]
  );

  const scroll = isVertical ? scrollTop : scrollLeft;

  const wrapperSize =
    nodesPosition[nodesPosition.length - 1] +
    getItemSize(nodesPosition.length - 1);

  const wrapperStyles: React.CSSProperties = {
    height: isVertical ? wrapperSize : "100%",
    width: orientation === "horizontal" ? wrapperSize : "100%",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  };

  const containerStyle = useMemo(
    () => ({
      width: width ?? "100%",
      height: height ?? "100%",
      overflow: "auto",
    }),
    [width, height]
  );

  const firstVisibleNode = findFirstAfter(scroll, nodesPosition);
  const startNode = Math.max(0, firstVisibleNode - overscanCount);

  const lastVisibleNode = findFirstAfter(scroll + containerSize, nodesPosition);

  const endNode = Math.min(
    children.length - 1,
    lastVisibleNode + overscanCount
  );

  const visibleChildren = children
    .slice(startNode, endNode + 1)
    .map((c, index) =>
      React.cloneElement(c, {
        ...c.props,
        style: {
          ...c.props.style,
          position: "absolute",
          top: 0,
          left: 0,
          transform: isVertical
            ? `translateY(${nodesPosition[startNode + index]}px)`
            : `translateX(${nodesPosition[startNode + index]}px)`,
        },
      })
    );

  return (
    <div style={containerStyle} className={"list-root"} ref={elementRef}>
      <div style={wrapperStyles} className={"list-root__wrapper"}>
        {visibleChildren}
      </div>
    </div>
  );
}

export const DynamicList = React.memo(List);
