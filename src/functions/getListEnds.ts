interface GetListEndsOptions {
  totalElements: number;

  itemSize: number;

  scrollDistance: number;

  listSize: number;

  overscan: number;
}

interface ListEnds {
  start: number;

  end: number;
}

export default function getListEnds(options: GetListEndsOptions): ListEnds {
  const { scrollDistance, listSize, itemSize, overscan, totalElements } =
    options;

  const start = Math.max(0, Math.floor(scrollDistance / itemSize) - overscan);

  const end = Math.min(
    totalElements - 1,
    start + Math.ceil(listSize / itemSize) + overscan
  );

  return { start, end };
}
