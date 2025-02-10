import creditScore from "./creditScore";

describe("Credit Score", () => {
  it("Should be excellent", () => {
    const expectedValue = "Excellent";
    const score = 800;

    const result = creditScore(score);

    expect(result).toBe(expectedValue);
  });
  it("Should be good", () => {
    const expectedValue = "Good";
    const score = 700;

    const result = creditScore(score);

    expect(result).toBe(expectedValue);
  });
  it("Should be fair", () => {
    const expectedValue = "Fair";
    const score = 650;

    const result = creditScore(score);

    expect(result).toBe(expectedValue);
  });
  it("Should be poor", () => {
    const expectedValue = "Poor";
    const score = 300;

    const result = creditScore(score);

    expect(result).toBe(expectedValue);
  });

  it("Should convert stringified numbers into int numbers", () => {
    const expectedValue = "Excellent";
    const score = "800";

    const result = creditScore(score);

    expect(result).toBe(expectedValue);
  });

  it("Should handle input outside of accepted range", () => {
    const expectedValue = "Input number is outside of accepted range";
    const score = "9999";

    const result = creditScore(score);

    expect(result).toBe(expectedValue);
  });

  it("Should handle non-numerical values", () => {
    const errorMessage = jest.spyOn(console, "error");
    const expectedLog = "Non-numerical values are not allowed";

    const expectedValue = undefined;
    const score = { company: "1" };

    // @ts-expect-error
    const result = creditScore(score);

    expect(result).toBe(expectedValue);
    expect(errorMessage.mock.calls[0][0]).toBe(expectedLog);
  });
});
