import generateAmortizationSchedule, {
  calculateMonthlyPayment,
} from "./generateAmortizationSchedule";

describe("Loan Amortization Schedule", () => {
  it("Should return monthly payment amount from a loan data of $100,00 at 5% interest for 30 years", () => {
    const expectedResult = 536.82;

    const loanAmount = 100000;
    const interest = 0.5;
    const loanTerm = 30;

    const calculatedMonthlyPayment = calculateMonthlyPayment(
      loanAmount,
      interest,
      loanTerm
    );

    expect(calculatedMonthlyPayment).toBe(expectedResult);
  });

  it("Should return loan data for a $100,000 at 5% interest for 30 years", () => {
    const expectedOutput = [
      {
        period: 1,
        /**
         * i === <interest>
         * n === <years> * <months>
         *
         * payment === <loan amount> * (
         *  i * ((1 + i)**n)
         *  /
         *  ((1 + i)**n) - 1
         * )
         *
         *
         */
        payment: 536.82,
        interest: 416.67,
        /**
         * principalPayment === payment - (balance * (0.5 / (30 * 12)))
         */
        principalPayment: 120.15,
        balance: 99879.85,
      },
      {
        /**
         * Period will always be +1 throughout the whole 30 years
         */
        period: 2,
        /**
         * The same as before
         */
        payment: 536.82,

        interest: 416.17,
        /**
         * Why is the principal payment higher than before
         */
        principalPayment: 120.65,
        /**
         * Balance became (balance - (<current principalPayment> + <prev principalPayment>))
         */
        balance: 99759.2,
      },
      //... more periods...
    ];

    const schedule = generateAmortizationSchedule(100000, 0.05, 30);
  });
});
