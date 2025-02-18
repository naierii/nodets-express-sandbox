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
  // TODO - make this an object
  loanAmount: number,
  interest: number,
  loanTerm: number
): number {
  // 12 represents the number of months in a year
  const numberOfPayments = loanTerm * 12;
  const monthlyInterestPayment = interest / 12;

  // prettier-ignore
  const payment =
    loanAmount *
      ((monthlyInterestPayment * ((1 + monthlyInterestPayment) ** numberOfPayments))
        /
      (((1 + monthlyInterestPayment) ** numberOfPayments) - 1));

  return payment;
}

// TODO - comment the formula and source
interface CalculatePrincipalPayment {
  interestRate: number;
  outstandingLoanBalance: number;
  totalMonthlyPayment: number;
}
export function calculatePrincipalPayment({
  interestRate,
  outstandingLoanBalance, // OLB
  totalMonthlyPayment, // TMP
}: CalculatePrincipalPayment): number {
  // prettier-ignore
  const principalPayment = totalMonthlyPayment - 
  (
    outstandingLoanBalance * (interestRate / 12)
  );

  return principalPayment;
}

// TODO - error handling
export function generateAmortizationSchedule(
  principal: number, // I might wanna make this available for strings. eg. "100,000"
  interestRate: number,
  loanTerm: number
): GenerateAmortizationSchedule[] {
  let outstandingLoanBalance = principal;
  const generatedAmortizationSchedule = [];

  let calculatedMonthlyPayment = calculateMonthlyPayment(
    principal,
    interestRate,
    loanTerm
  );
  calculatedMonthlyPayment = roundedDecimal(calculatedMonthlyPayment, 2);

  // This loop will calculate the monthly amortization schedule
  // Loop this in loanTerm * 12
  // iPeriod represents period of payment - 1 (index adjustment)
  for (let iPeriod = 0; iPeriod < loanTerm * 12; iPeriod++) {
    let calculatedPrincipalPayment = calculatePrincipalPayment({
      interestRate,
      outstandingLoanBalance,
      totalMonthlyPayment: calculatedMonthlyPayment,
    });
    calculatedPrincipalPayment = roundedDecimal(calculatedPrincipalPayment, 2);

    outstandingLoanBalance -= calculatedPrincipalPayment;

    generatedAmortizationSchedule.push({
      period: iPeriod + 1,
      payment: calculatedMonthlyPayment,
      principalPayment: calculatedPrincipalPayment,
      interest: roundedDecimal(
        calculatedMonthlyPayment - calculatedPrincipalPayment,
        2
      ),
      balance: roundedDecimal(outstandingLoanBalance, 2),
    });
  }

  return generatedAmortizationSchedule;
}

// TODO - relocate to number.util.ts
function roundedDecimal(originalValue: number, position: number) {
  // 1, 10, 100, etc,...
  const positionPoint = +(1 + "0".repeat(position));
  return Math.round(originalValue * positionPoint) / positionPoint;
}
