/**
 * @description Finds the first index of the array that is greater than the limit
 * using binary search
 *
 * @param limit the limit to search for
 * @param positions the nodes positions array
 */
export default function findFirstAfter(
  limit: number,
  positions: number[]
): number {
  let left = 0;
  let right = positions.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (positions[mid] <= limit) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
