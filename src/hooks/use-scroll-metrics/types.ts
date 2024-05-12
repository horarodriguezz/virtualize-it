export interface ScrollMetrics {
  /**
   * The width of the element
   */
  width: number;

  /**
   * The height of the element
   */
  height: number;

  /**
   * The scroll position from the top of the element
   */
  scrollTop: number;

  /**
   * The scroll position from the left of the element
   */
  scrollLeft: number;

  /**
   * The scroll position from the right of the element. This is the result of the scrollWidth - scrollLeft.
   */
  scrollRight: number;

  /**
   * The scroll position from the bottom of the element. This is the result of the scrollHeight - scrollTop.
   */
  scrollBottom: number;
}

export type ScrollMetricsResult = [
  size: ScrollMetrics,

  elementRef: React.RefObject<HTMLDivElement>
];
