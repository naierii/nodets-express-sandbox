import rotateArray from "./rotateArray";

describe("Rotate Array", () => {
  it("Should rotate by 2", () => {
    const arrayInput = [1, 2, 3, 4, 5];
    const rotateAmount = 2;

    const rotatedData = rotateArray(arrayInput, rotateAmount);

    expect(rotatedData).toStrictEqual([4, 5, 1, 2, 3]);
  });

  it("Should rotate array of string by 1", () => {
    const arrayInput = ["a", "b", "c"];
    const rotateAmount = 1;

    const rotatedData = rotateArray(arrayInput, rotateAmount);

    expect(rotatedData).toStrictEqual(["c", "a", "b"]);
  });

  it("Should rotate array with rotate amount bigger than arrayInput length", () => {
    const arrayInput = [10, 20, 30, 40];
    const rotateAmount = 5;

    const rotatedData = rotateArray(arrayInput, rotateAmount);

    // 5 % 4 = 1 rotation
    expect(rotatedData).toStrictEqual([40, 10, 20, 30]);
  });

  it("Should return empty array when passing empty array", () => {
    const arrayInput: never[] = [];
    const rotateAmount = 2;

    const rotatedData = rotateArray(arrayInput, rotateAmount);

    expect(rotatedData).toStrictEqual([]);
  });

  it("Should ensure no side effect on array input", () => {
    // BRD states that the original array will not change
    const arrayInput = [1, 2, 3, 4, 5];
    const rotateAmount = 5;

    const rotatedData = rotateArray(arrayInput, rotateAmount);

    expect(rotatedData).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
