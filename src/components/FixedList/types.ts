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
}

export interface DynamicListProps extends BaseListProps {
  /**
   * @prop getItemSize - A function that returns the height of each item in the list
   * @param index - The index of the item in the list
   */
  getItemSize: (index: number) => number;

  orientation?: ListOrientation;
}

export type ListOrientation = "vertical" | "horizontal";
