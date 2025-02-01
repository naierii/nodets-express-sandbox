interface FlattenArray extends Array<number | FlattenArray> {}

// This function will flatten nested arrays
// This function currently takes in nested array of numbers only
function flattenArray(arr: FlattenArray) {
  if (!arr.length) return [];
  const flattenedArray: number[] = [];

  function recursiveFlattenArray(recursiveArr: FlattenArray) {
    recursiveArr.forEach((item) => {
      if (Array.isArray(item)) {
        // Use recursive if the item is still an array
        recursiveFlattenArray(item);
        return;
      }

      // If value is not an array, add it to flattenedArray list
      flattenedArray.push(item as unknown as number);
    });
  }

  recursiveFlattenArray(arr);

  return flattenedArray;
}

console.log(flattenArray([1, [2, [3, 4], [[5]]], 6])); // Should return [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [], [2, [3]]])); // Should return [1, 2, 3]
console.log(flattenArray([])); // Should return []

export default {};
