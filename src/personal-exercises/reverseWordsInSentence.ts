export default (sentence: string): string | null => {
  // VALIDATION SECTION
  if (!sentence) {
    console.error("Sentence is empty");
    return null;
  } else if (typeof sentence !== "string") {
    console.error("Data should be a string");
    return null;
  }

  const reversedSentence = sentence
    .split(" ")
    // removes falsey values. eg: ['a', '', 'a'] => ['a', 'a']
    .filter((a) => a)
    .reverse()
    .join(" ");

  return reversedSentence;
};
