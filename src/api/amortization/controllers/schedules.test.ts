import { type Request, type Response } from "express";
import schedulesController, { getUserData } from "./schedules.controller";
import schedulesMock from "./schedules.mock";

describe("Amortization Schedules", () => {
  let mockReq: Request;
  let mockRes: Response;

  beforeEach(() => {
    mockReq = {} as Request;
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
  });

  it("Should take and join tables for user reianviloria", async () => {
    const expectedOutcome = {
      username: "reianviloria",
      email: "reianviloria@gmail.com",
      loanId: 1,
      loanAmount: 100000,
      interestRate: 0.05,
      loanTerm: 30,
      startDate: "12/1/2024",
    };

    const result = await getUserData();

    expect(result).toStrictEqual(expectedOutcome);
  });

  it("Should take and join tables for user reianviloria", async () => {
    const expectedOutcome = schedulesMock;

    await schedulesController(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      data: {
        schedules: expectedOutcome,
      },
      message: "Success",
    });
  });
});
