import React, { useMemo } from "react";

import { FixedListProps } from "../types";

import styles from "../styles.module.css";
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
      width,
      height,
    }),
    [width, height]
  );

  const wrapperStyles = useMemo((): React.CSSProperties => {
    const wrapperHeight = totalElements * itemSize + (totalElements - 1) * gap;

    return {
      height: isVertical ? wrapperHeight : "100%",
      width: !isVertical ? wrapperHeight : "100%",
      flexDirection: !isVertical ? "row" : "column",
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
    <div
      style={containerStyle}
      className={styles["list-root"]}
      ref={elementRef}
    >
      <div style={wrapperStyles} className={styles["list-root__wrapper"]}>
        {visibleNodes}
      </div>
    </div>
  );
}

export const FixedList = React.memo(List);
