export interface ElementSize {
  width: number;

  height: number;

  scrollTop: number;

  scrollLeft: number;
}

export type UseElementSizeResult = [
  size: ElementSize,

  elementRef: React.RefObject<HTMLDivElement>
];
