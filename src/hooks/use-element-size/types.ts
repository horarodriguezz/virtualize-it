export interface ElementSize {
  width: number;

  height: number;

  scrollTop: number;
}

export type UseElementSizeResult = [
  size: ElementSize,

  elementRef: React.RefObject<HTMLDivElement>
];
