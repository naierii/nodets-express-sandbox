function isPalindrome(theString: string) {
  // I could still improve the performance of this line below.
  const reversedString = theString.split("").reverse().join("");

  if (theString === reversedString) {
    return true;
  }
  return false;
}

function longestPalindrome(theString: string) {
  // Return if the whole word is a palindrome itself
  if (isPalindrome(theString)) {
    return theString;
  }

  // I need to loop through every letter
  for (
    let iCheckWordLength = theString.length - 1;
    iCheckWordLength > 0;
    iCheckWordLength--
  ) {
    // Another loop for taking out chunk of letters
    // abcdef
    // ab
    // bc
    // cd
    // de
    // ef

    for (
      let iWordStart = 0;
      iWordStart + iCheckWordLength < theString.length + 1;
      iWordStart++
    ) {
      const stringToCheck = theString.slice(
        iWordStart,
        iWordStart + iCheckWordLength
      );
      if (isPalindrome(stringToCheck)) {
        return stringToCheck;
      }
    }
  }

  return "No palindrome";
}

// Test cases
console.log(longestPalindrome("babad")); // Should return "bab" or "aba" (both are valid)
console.log(longestPalindrome("cbbd")); // Should return "bb"
console.log(longestPalindrome("a")); // Should return "a"
console.log(longestPalindrome("ac")); // Should return "a" or "c"

export default {};
