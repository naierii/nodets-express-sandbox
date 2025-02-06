// TODO - Relocate to text.util.ts for reusability
function isPalindrome(text: string) {
  const halfLength = Math.floor(text.length / 2);
  const firstHalf = text.slice(0, halfLength);

  let otherHalf = text.slice(halfLength);
  // This means that the text parameter has odd length
  if (firstHalf.length !== otherHalf.length) {
    otherHalf = otherHalf.slice(1);
  }

  return (
    firstHalf.toLowerCase().split("").reverse().join("") ===
    otherHalf.toLowerCase()
  );
}

export default (theText: string) => {
  const loweredText = theText.toLowerCase();
  if (!loweredText.length || loweredText.length === 1) {
    return loweredText;
  }

  if (isPalindrome(loweredText)) {
    return loweredText.toLowerCase();
  }

  // I need a loop that checks every possible group of letters
  // The loop will start from the max length going down
  // I also need a nested loop to track which combinations of letter are done
  // The nested of the loop will have +1 loop each time the outer loop is iterated

  // The first -1 represents adjustment of size and array index
  // The second -1 represents adjustment because max length was already tested above
  for (let iTheText = loweredText.length - 1 - 1; iTheText > 0; iTheText--) {
    // Calculate how many loops the nested loop needs
    const nestedLoopAttempts = loweredText.length - iTheText;

    for (let iTextGroup = 0; iTextGroup < nestedLoopAttempts; iTextGroup++) {
      // +1 represents adding 1 to the index
      // Because slice method's end, slices items before the end
      const textToTest = loweredText.slice(
        iTextGroup,
        iTheText + iTextGroup + 1
      );

      if (isPalindrome(textToTest)) {
        return textToTest;
      }
    }
  }
};
