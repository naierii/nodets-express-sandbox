function isEqualPrimitiveHandler<Item1, Item2>(
  item1: Item1,
  item2: Item2
): boolean {
  const isBothString = typeof item1 === "string" && typeof item2 === "string";
  const isBothNumber = typeof item1 === "number" && typeof item2 === "number";
  const isBothBoolean =
    typeof item1 === "boolean" && typeof item2 === "boolean";
  // typeof NaN (Not a Number) is number
  const isBothNaN = typeof item1 === "number" && typeof item2 === "number";

  const isSameString = isBothString && (item1 as string) === (item2 as string);
  const isSameNumber = isBothNumber && (item1 as number) === (item2 as number);
  const isSameBoolean =
    isBothBoolean && (item1 as boolean) === (item2 as boolean);

  // Variable defined as NaN
  // eg const a = NaN
  // Defined numbers are always !isNaN but defined NaN is always isNaN
  // despite the typeof NaN being number
  const isSameNaN = isBothNaN && isNaN(item1) && isNaN(item2);

  // Fixed Primitive values and boolean
  // null, undefined, and Infinity
  const isBothNull = item1 === null && item2 === null;
  const isBothUndefined = item1 === undefined && item2 === undefined;
  const isBothInfinite = item1 === Infinity && item2 === Infinity;
  const isBothTrue = item1 === true && item2 === true;
  const isBothFalse = item1 === false && item2 === false;

  const isEqualPrimitive =
    isSameString ||
    isSameNumber ||
    isSameNaN ||
    isSameBoolean ||
    isBothNull ||
    isBothUndefined ||
    isBothInfinite ||
    isBothTrue ||
    isBothFalse;

  return isEqualPrimitive;
}

// TODO - move this to util file
function isBothArray(item1: unknown, item2: unknown): Boolean {
  const isArrayItem1 = Array.isArray(item1);
  const isArrayItem2 = Array.isArray(item2);

  return isArrayItem1 && isArrayItem2;
}

// TODO - move this to util file
function isBothObject(item1: unknown, item2: unknown): Boolean {
  const isObjItem1 = typeof item1 === "object" && item1 !== null;
  const isObjItem2 = typeof item2 === "object" && item2 !== null;

  return isObjItem1 && isObjItem2;
}

function deepEquals<Item1, Item2>(item1: Item1, item2: Item2): boolean {
  /**
   * PRIMITIVE VALUES
   *  */

  if (isEqualPrimitiveHandler<Item1, Item2>(item1, item2)) return true;

  /**
   * ARRAY OR OBJECT
   */
  const isSameArray = Array.isArray(item1) && Array.isArray(item2);
  const isSameObject =
    typeof item1 === "object" &&
    item1 !== null &&
    typeof item2 === "object" &&
    item2 !== null;

  if (isSameObject || isSameArray) {
    const item1ObjKeys = Object.keys(item1);
    const item2ObjKeys = Object.keys(item2);
    const isSameLength = item1ObjKeys.length === item2ObjKeys.length;

    if (!isSameLength) return false;

    // create a nested for loop
    // If value is an array/object, perform recursive check
    for (let iItem1 = 0; iItem1 < item1ObjKeys.length; iItem1++) {
      const item1Key = item1ObjKeys[iItem1] as keyof typeof item1;
      const item1Item = item1[item1Key]; // this should work on both arrays and objects
      // someArr[listOfIndex[iteration]]
      // someObj[listOfKeys[iteration]]

      if (item1Key && !(item1Key in item2)) {
        return false;
      }

      const item2Item =
        // @ts-expect-error
        item1Key in item2 ? (item2[item1Key] as typeof item1Item) : undefined;

      if (
        isBothArray(item1Item, item2Item) ||
        isBothObject(item1Item, item2Item)
      ) {
        if (!deepEquals(item1Item, item2Item)) {
          return false;
        }
      } else if (!isEqualPrimitiveHandler(item1Item, item2Item)) {
        return false;
      }
      // Else, item is similar and execute next loop/finish loop
    }

    return true;
  }

  return false;
}

// Declare TS file as module type
export default deepEquals;
