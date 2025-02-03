export default function <Type>(
  arrayInput: Type[],
  rotateAmount: number
): Type[] {
  const newArray: Type[] = [];

  const calculatedRotateAmount =
    arrayInput.length > rotateAmount
      ? rotateAmount
      : rotateAmount % arrayInput.length;

  if (arrayInput.length === 0 || arrayInput.length === calculatedRotateAmount) {
    return newArray;
  }

  // Approach 1, use for loop
  // for (let iRotate = 0; iRotate < calculatedRotateAmount; iRotate++) {
  // }

  // Approach 2, use slice

  // -1 represents adjustment of length vs index
  const rotateStart = arrayInput.length - calculatedRotateAmount;
  const rotateEnd = arrayInput.length;
  const rotatedValues = arrayInput.slice(rotateStart, rotateEnd);

  // -1 represents adjustment of length vs index
  const leftoverEnd = arrayInput.length - calculatedRotateAmount;
  const leftoverValues = arrayInput.slice(0, leftoverEnd);

  return [...rotatedValues, ...leftoverValues];
}
