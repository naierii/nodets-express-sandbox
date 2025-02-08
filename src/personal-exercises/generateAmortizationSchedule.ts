interface GenerateAmortizationSchedule {
  period: number;
  payment: number;
  interest: number;
  principalPayment: number;
  balance: number;
}

/**
 * i === <interest>
 * n === <years> * <months>
 *
 *
 * payment === <loan amount> * (
 *  i * ((1 + i)**n)
 *  /
 *  ((1 + i)**n) - 1
 * )
 */
export function calculateMonthlyPayment(
  loanAmount: number,
  interest: number,
  loanTerm: number
): number {
  // 12 represents the number of months in a year
  const numberOfPayments = loanTerm * 12;
  const monthlyInterestPayment = interest / numberOfPayments;

  // prettier-ignore
  const payment =
    loanAmount *
      ((monthlyInterestPayment * ((1 + monthlyInterestPayment) ** numberOfPayments))
        /
      (((1 + monthlyInterestPayment) ** numberOfPayments) - 1));

  return payment;
}

export default function (
  principal: number, // I might wanna make this available for strings. eg. "100,000"
  interestRate: number,
  loanTerm: number
): GenerateAmortizationSchedule[] {
  // Create a function for calculating payment
  // Create a function that calculates principalPayment

  // Remove expect error once placeholder is removed
  // @ts-expect-error
  return "PLACEHOLDER";
}
