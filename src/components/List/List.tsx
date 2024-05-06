import React, { useMemo } from "react";

import { StaticListProps } from "./types";

import styles from "./styles.module.css";
import useElementSize from "../../hooks/use-element-size/useElementSize";

function List(dynamicListProps: StaticListProps) {
  const {
    children,
    width,
    height,
    overscanCount = 3,
    totalElements,
    rowHeight,
    gap = 0,
  } = dynamicListProps;

  const [{ scrollTop, height: containerHeight }, elementRef] = useElementSize();

  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  );

  const wrapperStyles = useMemo(
    () => ({
      height: totalElements * rowHeight + (totalElements - 1) * gap,
    }),
    [totalElements, rowHeight, gap]
  );

  const itemHeight = rowHeight + gap;

  const startNode = Math.max(
    0,
    Math.floor(scrollTop / itemHeight) - overscanCount
  );

  const nodesCount = Math.min(
    totalElements - startNode,
    Math.ceil(containerHeight / itemHeight) + overscanCount * 2
  );

  const visibleNodes = children
    .slice(startNode, startNode + nodesCount)
    .map((child, index) =>
      React.cloneElement(child, {
        key: index,
        style: {
          ...child.props.style,
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${(startNode + index) * itemHeight}px)`,
          height: `${rowHeight}px`,
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

const StaticList = React.memo(List);
export default StaticList;
