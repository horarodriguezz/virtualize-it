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
}
export type ScrollMetricsResult = [
    size: ScrollMetrics,
    elementRef: React.RefObject<HTMLDivElement>
];
