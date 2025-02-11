import calculateBusinessDays from "./calculateBusinessDays";

describe("Calculate Business Days", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should calculate 3 working days without weekends and weekends", () => {
    const expectedValue = 3;
    const startDate = new Date("02-12-2025");
    const endDate = new Date("02-14-2025");

    const result = calculateBusinessDays(startDate, endDate);

    expect(result).toBe(expectedValue);
  });
  it("Should calculate 3 working days with weekends but without holidays", () => {
    const expectedValue = 3;
    const startDate = new Date("02-13-2025");
    const endDate = new Date("02-17-2025");

    const result = calculateBusinessDays(startDate, endDate);

    expect(result).toBe(expectedValue);
  });
  it("Should calculate 3 working days with holidays but without weekends", () => {
    const expectedValue = 3;
    const startDate = new Date("02-11-2025");
    const endDate = new Date("02-14-2025");
    const holidays = [new Date("02-12-2025")];

    const result = calculateBusinessDays(startDate, endDate, holidays);

    expect(result).toBe(expectedValue);
  });

  it("Should handle if startDate, endDate, or holidays date has an invalid date", () => {
    const expectedValue = 0;
    const startDate = new Date("02-11-2025");
    const endDate = new Date("Hello");
    const holidays = [new Date("02-12-2025")];

    const errorLogMock = jest.spyOn(console, "error");
    const expectedErrorMessage = "Parameter contains Invalid Date";

    const result = calculateBusinessDays(startDate, endDate, holidays);

    expect(result).toBe(expectedValue);
    expect(errorLogMock.mock.calls[0][0]).toBe(expectedErrorMessage);
  });

  it("Should not accept startDate greater than endDate and return 0 with a error log", () => {
    const errorStack = jest.spyOn(console, "error");
    const expectedErrorMessage = "Your startDate is greater than the endDate";

    const expectedValue = 0;
    const startDate = new Date("01-01-2025");
    const endDate = new Date("01-01-2020");

    const result = calculateBusinessDays(startDate, endDate);

    expect(result).toBe(expectedValue);
    expect(errorStack.mock.calls[0][0]).toBe(expectedErrorMessage);
  });
});
