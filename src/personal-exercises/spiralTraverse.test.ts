import spiralTraverse from "./spiralMatrixTraversal";

describe("Spiral Traverse", () => {
  beforeEach(() => {});

  it("Should return traversed 3x3", () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect(spiralTraverse(arr)).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("Should return traversed 4x4", () => {
    const arr = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    expect(spiralTraverse(arr)).toStrictEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });

  it("Should return traversed 3x4", () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];

    expect(spiralTraverse(arr)).toStrictEqual([
      1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8,
    ]);
  });

  it("Should return traversed 4x3", () => {
    const arr = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];

    expect(spiralTraverse(arr)).toStrictEqual([
      1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7,
    ]);
  });
});
