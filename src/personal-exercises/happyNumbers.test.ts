import happyNumbers from "./happyNumbers";

describe("Happy Numbers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // SUCCESS SCENARIOS
  it("Should return true on case 19", () => {
    const expectedOutcome = true;
    const testValue = 19;

    const outcome = happyNumbers(testValue);

    expect(outcome).toBe(expectedOutcome);
    // Should return true (1^2 + 9^2 = 82, 8^2 + 2^2 = 68, 6^2 + 8^2 = 100, 1^2 + 0^2 + 0^2 = 1)
  });
  it("Should return false on case 2", () => {
    const expectedOutcome = false;
    const testValue = 2;

    const outcome = happyNumbers(testValue);

    expect(outcome).toBe(expectedOutcome);
    // Should return false (2^2 = 4, 4^2 = 16, 1^2 + 6^2 = 37, 3^2 + 7^2 = 58, 5^2 + 8^2 = 89, 8^2 + 9^2 = 145, 1^2 + 4^2 + 5^2 = 42, 4^2 + 2^2 = 20, 2^2 + 0^2 = 4,...)
  });

  // FAILED SCENARIOS & EDGE CASES
  it("Should not allow numbers less than 1", () => {
    const expectedOutcome = null;
    const testValue = -5;

    const errorMock = jest.spyOn(console, "error");
    const expectedErrorMessage =
      "Numbers should be a positive, non-zero number";

    const outcome = happyNumbers(testValue);

    expect(outcome).toBe(expectedOutcome);
    expect(errorMock.mock.calls[0][0]).toBe(expectedErrorMessage);
  });
  it("Should not allow non-numeric or number string values", () => {
    const expectedOutcome = null;
    const testValue = {};

    const errorMock = jest.spyOn(console, "error");
    const expectedErrorMessage = "Data type is incompatible";

    // @ts-expect-error
    const outcome = happyNumbers(testValue);

    expect(outcome).toBe(expectedOutcome);
    expect(errorMock.mock.calls[0][0]).toBe(expectedErrorMessage);
  });
});
