import generateAmortizationSchedule, {
  calculateMonthlyPayment,
  calculatePrincipalPayment,
} from "./generateAmortizationSchedule";

describe("Loan Amortization Schedule", () => {
  it("Should return monthly payment amount from a loan data of $100,00 at 5% interest for 30 years", () => {
    const expectedResult = 536.82;

    const loanAmount = 100000;
    const interest = 0.05;
    const loanTerm = 30;

    const calculatedMonthlyPayment = calculateMonthlyPayment(
      loanAmount,
      interest,
      loanTerm
    );

    expect(Math.round(calculatedMonthlyPayment * 100) / 100).toBe(
      expectedResult
    );
  });

  it("Should return a proper Principal Payment calculation for the Period 1", () => {
    const expectedValue = 120.15;

    const interestRate = 0.05;
    const outstandingLoanBalance = 100000;
    // I might wanna use a function on this one.
    const totalMonthlyPayment = 536.82;

    const calculatedPrincipalPayment = calculatePrincipalPayment({
      interestRate,
      outstandingLoanBalance,
      totalMonthlyPayment,
    });

    expect(Math.round(calculatedPrincipalPayment * 100) / 100).toBe(
      expectedValue
    );
  });

  it("Should return a proper Principal Payment calculation for the Period 2", () => {
    const expectedValue = 120.65;

    const interestRate = 0.05;
    const outstandingLoanBalance = 99879.85;
    // I might wanna use a function on this one.
    const totalMonthlyPayment = 536.82;

    const calculatedPrincipalPayment = calculatePrincipalPayment({
      interestRate,
      outstandingLoanBalance,
      totalMonthlyPayment,
    });

    expect(Math.round(calculatedPrincipalPayment * 100) / 100).toBe(
      expectedValue
    );
  });

  it("Should return loan data for a $100,000 at 5% interest for 30 years", () => {
    const expectedOutput = [
      {
        period: 1, // correct
        payment: 536.82, // Correct, but round it
        interest: 416.67, // To be corrected
        principalPayment: 120.15, // Correct, but round it
        balance: 99879.85, // Correct, but round it
      },

      {
        period: 2,
        payment: 536.82,
        interest: 416.17,
        principalPayment: 120.65,
        balance: 99759.2,
      },

      //... more periods...
    ];

    const schedule = generateAmortizationSchedule(100000, 0.05, 30);

    expect(schedule[0]).toStrictEqual(expectedOutput[0]);
    expect(schedule[1]).toStrictEqual(expectedOutput[1]);
  });

  it("Should return loan data for a $50,000 at 3% interest for 15 years", () => {
    console.warn("Test case has no data");
  });
});
