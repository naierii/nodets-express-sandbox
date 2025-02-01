(() => {
  function findMissingNumber(arrOfNum: number[]) {
    // This function will find the missing number in an array
    // This arrOfNum is expected to always start with 1
    // This function is only expected to return a single number
    // And the whole function will stop once that single number is found

    for (let i = 0; i < arrOfNum.length; i++) {
      // We are expecting the number in array to start from 1
      const expectedNumber = i + 1;
      if (arrOfNum[i] !== expectedNumber) {
        return expectedNumber;
      }
    }

    return "No missing number detected";
  }

  // Test cases (Automated testing such as Jest)
  // Normal case
  const test1 = [1, 2, 3, 4, 6, 7, 8]; // 5
  // Starts with number not equal to 1
  const test2 = [2, 3, 4, 5, 6]; // 1
  // No missing number;
  const test3 = [1, 2, 3, 4]; // No missing number detected

  console.log("test1", findMissingNumber(test1)); // 5
  console.log("test2", findMissingNumber(test2)); // 1
  console.log("test3", findMissingNumber(test3)); // No missing number detected
})();
