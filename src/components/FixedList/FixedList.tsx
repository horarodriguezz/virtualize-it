import React, { useMemo } from "react";

import { FixedListProps } from "../types";

import useElementSize from "../../hooks/use-element-size/useElementSize";

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
  } = dynamicListProps;

  const [
    { scrollTop, scrollLeft, height: containerHeight, width: containerWidth },
    elementRef,
  ] = useElementSize();

  const isVertical = orientation === "vertical";

  const containerSize = useMemo(
    () => (isVertical ? containerHeight : containerWidth),
    [containerHeight, containerWidth, isVertical]
  );

  const scroll = isVertical ? scrollTop : scrollLeft;

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

  const totalItemSize = itemSize + gap;

  const startNode = Math.max(
    0,
    Math.floor(scroll / totalItemSize) - overscanCount
  );

  const nodesCount = Math.min(
    totalElements - startNode,
    Math.ceil(containerSize / totalItemSize) + overscanCount * 2
  );

  const visibleNodes = children
    .slice(startNode, startNode + nodesCount)
    .map((child, index) =>
      React.cloneElement(child, {
        ...child.props,
        style: {
          ...child.props.style,
          position: "absolute",
          top: 0,
          left: 0,
          transform: isVertical
            ? `translateY(${(startNode + index) * totalItemSize}px)`
            : `translateX(${(startNode + index) * totalItemSize}px)`,
        },
      })
    );

  return (
    <div style={containerStyle} className={"list_root"} ref={elementRef}>
      <div style={wrapperStyles} className={"list-root__wrapper"}>
        {visibleNodes}
      </div>
    </div>
  );
}

export const FixedList = React.memo(List);
