import { type NextFunction, type Request, type Response } from "express";
import pool from "../../../services/postgre-sql/pool";
import { generateAmortizationSchedule } from "../../../utils/math.util";
import { NotFound, resErrorHandler } from "../../../utils/util";

// TODO - Should receive dynamic parameters
// This should be relocated in a .model file.
// This should have a reusable query calls to establish a common practice
// and avoid accidents.
export async function getUserData() {
  const client = await pool.connect();

  // TODO - I should have schema
  const dbRes = await client.query(
    `
    SELECT 
      Users.username,
      Users.email,
      Loans.id AS loanId,
      Loans.loan_amount AS loanAmount,
      Loans.interest_rate AS interestRate,
      Loans.loan_term AS loanTerm,
      Loans.start_date AS startDate
    FROM Users
    INNER JOIN Loans on Users.id = Loans.user_id
    WHERE Users.id = $1
    `,
    [2]
  );

  // TODO - This should have type based on schema
  const userData = dbRes.rows[0];

  // TODO - Figure out why aliases don't work
  // OR I should have a reusable function for data conversion
  // TODO - Check why received decimals are strings
  const userLoanData = {
    username: userData.username,
    email: userData.email,
    loanId: userData.loanid,
    loanAmount: userData.loanamount,
    interestRate: +userData.interestrate,
    loanTerm: userData.loanterm,
    startDate: new Date(userData.startdate).toLocaleDateString(),
  };

  return userLoanData;
}

export default async (req: Request, res: Response) => {
  try {
    // TODO - should receive dynamic arguments
    const userData = await getUserData();

    if (!userData) {
      throw new NotFound(`userId: <PLACEHOLDER>`);
    }

    const schedules = generateAmortizationSchedule(
      userData.loanAmount,
      userData.interestRate,
      userData.loanTerm
    );

    res.status(200).json({
      data: {
        schedules,
      },
      message: "Success",
    });
  } catch (error) {
    resErrorHandler(res, error);
  }
};
