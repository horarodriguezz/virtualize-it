import React, { useMemo } from "react";
import { VirtualizedGridProps } from "../types";
import useElementSize from "../../hooks/use-element-size/useElementSize";

function Grid(props: VirtualizedGridProps) {
  const {
    width,
    height,
    rowHeight,
    columnWidth,
    totalRows,
    rowGap = 0,
    columnGap = 0,
    rowOverscanCount = 3,
    columnOverscanCount = 1,
    children,
  } = props;

  const [
    { width: containerWidth, height: containerHeight, scrollLeft, scrollTop },
    ref,
  ] = useElementSize();

  const containerStyle = useMemo(
    () => ({
      width: width ?? "100%",
      height: height ?? "100%",
      overflow: "auto",
    }),
    [width, height]
  );

  const wrapperHeight = totalRows * rowHeight + (totalRows - 1) * rowGap;
  const wrapperWidth = totalRows * columnWidth + (totalRows - 1) * columnGap;

  const totalRowHeight = rowHeight + rowGap;
  const totalColumnWidth = columnWidth + columnGap;

  const startRow = Math.max(
    0,
    Math.floor(scrollTop / totalRowHeight) - rowOverscanCount
  );
  const startColumn = Math.max(
    0,
    Math.floor(scrollLeft / totalColumnWidth) - columnOverscanCount
  );

  const endRow = Math.min(
    totalRows - 1,
    startRow + Math.ceil(containerHeight / totalRowHeight) + rowOverscanCount
  );

  const endColumn = Math.min(
    totalRows - 1,
    startColumn +
      Math.ceil(containerWidth / totalColumnWidth) +
      columnOverscanCount
  );

  const visibleNodes = children.slice(startRow, endRow + 1).map((c, rowIndex) =>
    React.cloneElement(c, {
      ...c.props,
      style: {
        ...c.props.style,
        position: "absolute",
        top: 0,
        left: 0,
        transform: `translateY(${(startRow + rowIndex) * totalRowHeight}px)`,
      },
      children: c.props.children
        .slice(startColumn, endColumn + 1)
        .map((child: JSX.Element, colIndex: number) =>
          React.cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              position: "absolute",
              top: 0,
              left: 0,
              transform: `translateX(${
                (startColumn + colIndex) * totalColumnWidth
              }px)`,
            },
          })
        ),
    })
  );

  return (
    <div ref={ref} style={containerStyle} className={"list-root"}>
      <div
        style={{
          height: wrapperHeight,
          width: wrapperWidth,
          flexDirection: "column",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
        className={"list-root__wrapper"}
      >
        {visibleNodes}
      </div>
    </div>
  );
}

export const VirtualizedGrid = React.memo(Grid);
