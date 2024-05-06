export default function calculateNodesPosition(
  nodes: Array<JSX.Element>,
  gap: number | undefined = 0,
  getItemSize: (index: number) => number
): number[] {
  const positions: number[] = [];

  let currentHeight = 0;

  nodes.forEach((_, index) => {
    const height = getItemSize(index);

    positions.push(currentHeight);

    currentHeight += height + gap;
  });

  return positions;
}
