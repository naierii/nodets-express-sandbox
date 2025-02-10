export default (creditScore: number | string): string | void => {
  /**
   * On a normal project, this should be stored in DB or Parameter Store or ENV variables
   * for easier possible configurations.
   */

  try {
    const ratings = {
      excellent: [720, 850],
      good: [680, 719],
      fair: [640, 679],
      poor: [300, 639],
    };

    const intCreditScore = +creditScore;

    // TODO - Handle Infinity
    if (isNaN(intCreditScore)) {
      throw new Error("Non-numerical values are not allowed");
    }

    if (
      intCreditScore >= ratings.excellent[0] &&
      intCreditScore <= ratings.excellent[1]
    ) {
      return "Excellent";
    } else if (
      intCreditScore >= ratings.good[0] &&
      intCreditScore <= ratings.good[1]
    ) {
      return "Good";
    } else if (
      intCreditScore >= ratings.fair[0] &&
      intCreditScore <= ratings.fair[1]
    ) {
      return "Fair";
    } else if (
      intCreditScore >= ratings.poor[0] &&
      intCreditScore <= ratings.poor[1]
    ) {
      return "Poor";
    }

    return "Input number is outside of accepted range";
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : JSON.stringify(error);

    console.error(errorMessage);
  }
};
