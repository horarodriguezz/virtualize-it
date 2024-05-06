import React, { useMemo } from "react";
import { DynamicListProps } from "./types";
import useElementSize from "../../hooks/use-element-size/useElementSize";
import styles from "./styles.module.css";
import calculateNodesPosition from "../../functions/calculateNodesPosition";
import findFirstAfter from "../../functions/findFirstAfter";

function List(dynamicListProps: DynamicListProps) {
  const {
    children,
    width,
    height,
    gap,
    overscanCount = 3,
    getItemSize,
  } = dynamicListProps;

  const [{ scrollTop, height: containerHeight }, elementRef] = useElementSize();

  const nodesPosition = calculateNodesPosition(children, gap, getItemSize);

  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height]
  );

  const wrapperStyles = {
    height:
      nodesPosition[nodesPosition.length - 1] +
      getItemSize(nodesPosition.length - 1),
  };

  const firstVisibleNode = findFirstAfter(scrollTop, nodesPosition);
  const startNode = Math.max(0, firstVisibleNode - overscanCount);

  const lastVisibleNode = findFirstAfter(
    scrollTop + containerHeight,
    nodesPosition
  );

  console.log("lastVisibleNode", lastVisibleNode);

  const endNode = Math.min(
    children.length - 1,
    lastVisibleNode + overscanCount
  );

  const visibleChildren = children
    .slice(startNode, endNode + 1)
    .map((c, index) =>
      React.cloneElement(c, {
        key: index,
        style: {
          ...c.props.style,
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${nodesPosition[startNode + index]}px)`,
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
        {visibleChildren}
      </div>
    </div>
  );
}

const DynamicList = React.memo(List);

export default DynamicList;
