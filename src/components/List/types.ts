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
   */
  gap?: number;
}

export interface StaticListProps extends BaseListProps {
  /**
   * @prop rowHeight - The height of each item in the list
   */
  rowHeight: number;
}
