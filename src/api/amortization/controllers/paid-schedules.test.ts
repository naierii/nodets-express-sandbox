import { type Request } from "express";
import schedulesMock from "./schedules.mock";

describe("Paid Schedules", () => {
  let mockReq: Request;
  let mockRes: Response;

  beforeEach(() => {
    mockReq = {} as Request;
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
  });

  it("Should return all paid items in the database for user reian", () => {
    const expectedOutcome = [
      {
        paymentId: 1,
        loanId: 1,
        period: 1,
        paymentDate: "01/01/2025",
        paymentAmount: 536.82,
      },
      {
        paymentId: 2,
        loanId: 1,
        period: 2,
        paymentDate: "02/01/2025",
        paymentAmount: 536.82,
      },
    ];

    const result = "PLACEHOLDER()";

    expect(result).toStrictEqual(expectedOutcome);
  });

  it("Should return two paid loan schedule for user reian", async () => {
    const expectedOutcome = {
      data: { paid: [schedulesMock[0], schedulesMock[1]] },
      message: "Success",
    };
    const expectedStatus = 200;

    ("await PLACEHOLDER(mockReq, mockRes)");

    expect(mockRes.status).toHaveBeenCalledWith(expectedStatus);
    expect(mockRes.json).toHaveBeenCalledWith(expectedOutcome);
  });
});
