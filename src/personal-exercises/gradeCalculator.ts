(() => {
  try {
    function calculateGrade(theGrade: number) {
      // Grade the score
      // 90-100 = A
      // 80-89 = B
      // 70-79 = C
      // 60-69 = D
      // 0-60 = F

      // Check if grade is invalid
      // score less than 0 and greater than 100
      const isValidGrade = theGrade >= 0 && theGrade <= 100;

      if (!isValidGrade) throw new Error("Invalid Grade");

      if (theGrade >= 90) {
        return "A";
      } else if (theGrade >= 80) {
        return "B";
      } else if (theGrade >= 70) {
        return "C";
      } else if (theGrade >= 60) {
        return "D";
      }
      return "F";
    }

    // Jest test cases
    const student1Grade = calculateGrade(95); // A
    const student2Grade = calculateGrade(90); // A
    const student3Grade = calculateGrade(85); // B
    const student4Grade = calculateGrade(80); // B
    const student5Grade = calculateGrade(75); // C
    const student6Grade = calculateGrade(70); // C
    const student7Grade = calculateGrade(65); // D
    const student8Grade = calculateGrade(60); // D
    const student9Grade = calculateGrade(55); // E
    const student10Grade = calculateGrade(50); // E

    console.log("student1Grade", student1Grade);
    console.log("student2Grade", student2Grade);
    console.log("student3Grade", student3Grade);
    console.log("student4Grade", student4Grade);
    console.log("student5Grade", student5Grade);
    console.log("student6Grade", student6Grade);
    console.log("student7Grade", student7Grade);
    console.log("student8Grade", student8Grade);
    console.log("student9Grade", student9Grade);
    console.log("student10Grade", student10Grade);

    const testError1 = calculateGrade(101); // Will not reach the next line because it's not a valid grade
    console.log("testError1", testError1);
  } catch (error) {
    // Front-end
    // errorDisplayHandler(error);
    // back-end
    // resErrorHandler(res, error);

    const getErrorMessage = (error as Error).message; // use someErrorHandler()
    console.error(getErrorMessage);
  }
})();
