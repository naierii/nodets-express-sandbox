import generatePattern from "./generatePattern";

describe("Generate Pattern", () => {
  /**
   * Problem: Implement a function called generatePattern(rows)
   * that generates a numerical pattern like this (for rows = 5)
   *
   * 1
   * 12
   * 123
   * 1234
   * 12345
   */

  /**
   * SUCCESS CASES
   */
  it("Should log pattern rows of 5", () => {
    const pattern = generatePattern(5);

    expect(pattern).toBe("1\n12\n123\n1234\n12345");
  });

  it("Should log pattern rows of 3", () => {
    const pattern = generatePattern(3);

    expect(pattern).toBe("1\n12\n123");
  });

  it("Should log pattern rows of 7", () => {
    const pattern = generatePattern(7);

    expect(pattern).toBe("1\n12\n123\n1234\n12345\n123456\n1234567");
  });

  /**
   * FAILED CASES
   */
  it("Should fail if value is negative", () => {
    const myTestLogger = jest.spyOn(console, "error");

    generatePattern(-5);

    expect(myTestLogger.mock.calls[0][0]).toEqual(
      "Negative values are not allowed"
    );

    myTestLogger.mockClear();
  });

  it("Should not accept 0 value", () => {
    const myTestLogger = jest.spyOn(console, "error");

    generatePattern(0);

    expect(myTestLogger.mock.calls[0][0]).toEqual("0 values are not allowed");

    myTestLogger.mockClear();
  });

  it("Should fail if value is not a number", () => {
    const myTestLogger = jest.spyOn(console, "error");

    // @ts-expect-error
    generatePattern({});

    expect(myTestLogger.mock.calls[0][0]).toEqual(
      "Non numerical numbers are not allowed"
    );

    myTestLogger.mockClear();
  });
});
