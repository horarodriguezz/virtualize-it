import React from "react";
import { VirtualizedGridProps } from "../types";
import useScrollMetrics from "../../hooks/use-scroll-metrics/useScrollMetrics";
import getContainerStyles from "../../functions/styles/getContainerStyles";
import Box from "../Box";

function Grid(props: VirtualizedGridProps) {
  const {
    width,
    height,
    rowHeight,
    columnWidth,
    totalRows,
    totalColumns = 0,
    rowGap = 0,
    columnGap = 0,
    rowOverscanCount = 3,
    columnOverscanCount = 1,
    children,
  } = props;

  const [
    { width: containerWidth, height: containerHeight, scrollLeft, scrollTop },
    ref,
  ] = useScrollMetrics();

  const wrapperHeight = totalRows * rowHeight + (totalRows - 1) * rowGap;
  const wrapperWidth =
    columnWidth && totalColumns
      ? totalColumns * columnWidth + (totalRows - 1) * columnGap
      : undefined;

  const totalRowHeight = rowHeight + rowGap;
  const totalColumnWidth = (columnWidth ?? 0) + columnGap;

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
    totalColumns - 1,
    startColumn +
      Math.ceil(containerWidth / totalColumnWidth) +
      columnOverscanCount
  );

  return (
    <div
      ref={ref}
      style={getContainerStyles({ width, height })}
      className={"list-root"}
    >
      <div
        style={{
          height: wrapperHeight,
          width: wrapperWidth ?? "100%",
          flexDirection: "column",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
        className={"list-root__wrapper"}
      >
        {children.slice(startRow, endRow + 1).map((r, rI) => {
          const isValidChildren =
            r.props?.children && Array.isArray(r.props.children);

          return (
            <Box key={rI} isVertical offset={(startRow + rI) * totalRowHeight}>
              {isValidChildren
                ? r.props.children
                    ?.slice(startColumn, endColumn + 1)
                    .map((c: JSX.Element, cI: number) => (
                      <Box
                        key={cI}
                        offset={(startColumn + cI) * totalColumnWidth}
                      >
                        {c}
                      </Box>
                    ))
                : r}
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export const VirtualizedGrid = React.memo(Grid);
