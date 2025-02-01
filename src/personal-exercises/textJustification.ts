function justifyText(textArr: string[], maxWidth: number): string[] {
  let iNewOutput = 0;
  const newOutput: string[] = [];

  let textGroup: string[] = [];

  function calculateAndAddSpace() {
    // separationCount represents the number of space in a sentence no matter the length
    // "   " is counted as a single separationCount
    const separationCount = textGroup.length - 1;

    const remainingSpaceToSplit = maxWidth - textGroup.join("").length;

    // Round down (eg. 3.5 => 3)
    const minSpaceSplit = Math.floor(remainingSpaceToSplit / separationCount);

    // 8 % 3 => 2
    const remainderSpaceSplit = remainingSpaceToSplit % separationCount;

    textGroup = textGroup.map((textItem, iTextItem) => {
      let spacedTextItem = textItem;

      // Last item don't have index on their right and should be return immediately
      // +1 represents adjustment of index and length
      if (iTextItem === separationCount) {
        return spacedTextItem;
      }

      // Adds the minimum empty space for each item
      spacedTextItem += " ".repeat(minSpaceSplit);

      // This adds one more space on the items that should be affected by remainder
      // +1 represents adjustment of index to item with remainder space
      if (iTextItem + 1 <= remainderSpaceSplit) {
        spacedTextItem += " ";
      }

      return spacedTextItem;
    });

    return textGroup.join("");
  }

  for (let iTextArr = 0; iTextArr < textArr.length; iTextArr++) {
    let textGroupText = textGroup.join(" ");

    // Check if attempt of adding another word will be
    // greater than maxWidth.
    // +1 represents empty space after the previous word
    if (textGroupText.length + textArr[iTextArr].length + 1 <= maxWidth) {
      textGroup.push(textArr[iTextArr]);

      // +1 represents index to length adjustment
      if (iTextArr + 1 === textArr.length) {
        newOutput[iNewOutput] = calculateAndAddSpace();
      }
    }
    // Calculate and add spaces
    else {
      newOutput[iNewOutput] = calculateAndAddSpace();

      // Reset
      textGroup = [];
      iNewOutput++;

      // Repeat loop iteration
      iTextArr--;
    }
  }

  return newOutput;
}

export default justifyText;
