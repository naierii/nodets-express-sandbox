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

  const myTestLogger = jest.spyOn(console, "log");

  afterEach(() => {
    myTestLogger.mockClear();
  });

  /**
   * SUCCESS CASES
   */
  it("Should log pattern rows of 5", () => {
    generatePattern(5);

    expect(myTestLogger.mock.calls[0][0]).toEqual(1);
    expect(myTestLogger.mock.calls[1][0]).toEqual(12);
    expect(myTestLogger.mock.calls[2][0]).toEqual(123);
    expect(myTestLogger.mock.calls[3][0]).toEqual(1234);
    expect(myTestLogger.mock.calls[4][0]).toEqual(12345);
  });

  it("Should log pattern rows of 3", () => {
    generatePattern(3);

    expect(myTestLogger.mock.calls[0][0]).toEqual(1);
    expect(myTestLogger.mock.calls[1][0]).toEqual(12);
    expect(myTestLogger.mock.calls[2][0]).toEqual(123);
  });

  it("Should log pattern rows of 7", () => {
    generatePattern(7);

    expect(myTestLogger.mock.calls[0][0]).toEqual(1);
    expect(myTestLogger.mock.calls[1][0]).toEqual(12);
    expect(myTestLogger.mock.calls[2][0]).toEqual(123);
    expect(myTestLogger.mock.calls[3][0]).toEqual(1234);
    expect(myTestLogger.mock.calls[4][0]).toEqual(12345);
    expect(myTestLogger.mock.calls[5][0]).toEqual(123456);
    expect(myTestLogger.mock.calls[6][0]).toEqual(1234567);
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
