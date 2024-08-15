export interface BaseListProps {
  children: Array<JSX.Element>;

  /**
   * @default "100%"
   */
  width?: React.CSSProperties["width"];

  /**
   * @default "100%"
   */
  height?: React.CSSProperties["height"];

  /**
   * @prop totalElements - The total number of elements in the list
   */
  totalElements: number;

  /**
   * @prop overscanCount - The number of elements to render outside of the visible area
   * @default 3
   */
  overscanCount?: number;

  /**
   * @prop gap - The gap between each item in the list
   * @default 0
   */
  gap?: number;
}

export interface FixedListProps extends BaseListProps {
  /**
   * @prop rowHeight - The height of each item in the list
   */
  itemSize: number;

  orientation?: ListOrientation;

  /**
   * @prop reverse - In vertical orientation, the list will be rendered with the scroll position at the bottom and virtualized items will be rendered from the bottom to the top.
   * In horizontal orientation, the list will be rendered with the scroll position at the right and virtualized items will be rendered from the right to the left.
   * @default false
   */
  reverse?: boolean;
}

export interface DynamicListProps extends BaseListProps {
  /**
   * @prop getItemSize - A function that returns the height of each item in the list
   * @param index - The index of the item in the list
   */
  getItemSize: (index: number) => number;

  orientation?: ListOrientation;

  /**
   * @prop reverse - In vertical orientation, the list will be rendered with the scroll position at the bottom and virtualized items will be rendered from the bottom to the top.
   * In horizontal orientation, the list will be rendered with the scroll position at the right and virtualized items will be rendered from the right to the left.
   * @default false
   */
  reverse?: boolean;
}

export type ListOrientation = "vertical" | "horizontal";

export interface VirtualizedGridProps
  extends Pick<BaseListProps, "width" | "height" | "children"> {
  /**
   * @prop rowHeight - The height of each row in the grid
   */
  rowHeight: number;

  /**
   * @prop columnWidth - The width of each column in the grid
   */
  columnWidth?: number;

  /**
   * @prop totalRows - The total number of rows in the grid
   */
  totalRows: number;

  /**
   * @prop totalColumns - The total number of columns in the grid
   */
  totalColumns?: number;

  /**
   * @prop rowGap - The gap between each row in the grid
   * @default 0
   **/
  rowGap?: number;

  /**
   * @prop columnGap - The gap between each column in the grid
   * @default 0
   */
  columnGap?: number;

  /**
   * @prop rowOverscanCount - The number of rows to render outside of the visible area
   * @default 3
   */
  rowOverscanCount?: number;

  /**
   * @prop columnOverscanCount - The number of columns to render outside of the visible area
   * @default 1
   */
  columnOverscanCount?: number;
}

export interface BoxProps {
  children?: React.ReactNode;

  isVertical?: boolean;

  offset?: number;
}
