function removeWhitespace(theString: string) {
  return theString.replace(" ", "");
}

function isPalindromePrototype(theString: string) {
  const processedString = removeWhitespace(theString);

  const reversedWord = processedString
    // Make this an string array [r,a,c,e,c,a,r]
    .split("")
    .reverse()
    // Make it string again after reversing
    .join("");

  return processedString === reversedWord;
}

function isPalindromeV2(theString: string) {
  // Take half of the word (rounded down)
  // racecar = rac
  const firstHalf = theString.slice(0, Math.floor(theString.length / 2));

  // Look online if there's a NEW method in 2025 that can reverse the string of a text.
  // BUT since this is an interview, I would simply rely on my stock knowledge and use
  // for loop to reverse the string
  let reversedString = "";
  for (let iReversed = firstHalf.length - 1; iReversed > 0 - 1; iReversed--) {
    reversedString += firstHalf[iReversed];
  }

  // Take remaining half of the word
  // racecar
  // If the original word has an odd length, remove the first letter
  const otherHalfStartingIndex = Math.ceil(theString.length / 2);

  const otherHalf = theString.slice(otherHalfStartingIndex); // "racecar".slice(3) -> "ecar"

  // Finally, compare the two string
  return reversedString === otherHalf;
}

// Test cases
console.log(isPalindromeV2("racecar")); // true
console.log(isPalindromeV2("abba")); // true
console.log(isPalindromeV2("aba")); // true
console.log(isPalindromeV2("abbcbba")); // true
console.log(isPalindromeV2("abbccba")); // false
console.log(isPalindromeV2("abdccba")); // false

export default {};
