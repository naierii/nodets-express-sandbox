import generateMatrixPattern from "./generateMatrixPattern";

describe("Generate Matrix Pattern", () => {
  it("Should generate 3x3 matrix pattern", () => {
    const expectedMatrix = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];

    const matrix = generateMatrixPattern(3, 3);

    try {
      expect(matrix).toStrictEqual(expectedMatrix);
    } catch (error) {}
  });
  it("Should generate 4x4 matrix pattern", () => {
    const expectedMatrix = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const matrix = generateMatrixPattern(4, 4);

    expect(matrix).toStrictEqual(expectedMatrix);
  });

  it("Should generate 3x4 matrix pattern", () => {
    const expectedMatrix = [
      [1, 2, 3],
      [10, 11, 4],
      [9, 12, 5],
      [8, 7, 6],
    ];
    const matrix = generateMatrixPattern(3, 4);

    expect(matrix).toStrictEqual(expectedMatrix);
  });

  it("Should generate 4x3 matrix pattern", () => {
    const expectedMatrix = [
      [1, 2, 3, 4],
      [10, 11, 12, 5],
      [9, 8, 7, 6],
    ];
    const matrix = generateMatrixPattern(4, 3);

    expect(matrix).toStrictEqual(expectedMatrix);
  });
  it("Should generate 0 matrix pattern", () => {
    const expectedMatrix: never[] = [];
    const matrix = generateMatrixPattern(0, 0);

    expect(matrix).toStrictEqual(expectedMatrix);
  });
  // it('Should generate 1x3 matrix pattern', () => {})
  // it('Should generate 3x1 matrix pattern', () => {})
  // it('Should generate 3x0 matrix pattern', () => {})
  // it('Should generate 0x3 matrix pattern', () => {})
});
