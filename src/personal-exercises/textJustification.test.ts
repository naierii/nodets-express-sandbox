import justifyText from "./textJustification";

describe("Justify Text", () => {
  const words = ["This", "is", "an", "example", "of", "text", "justification."];

  // beforeEach();

  it("Should justify text by 16", () => {
    const justifiedText = justifyText(words, 16);

    expect(justifiedText).toStrictEqual([
      "This    is    an",
      "example  of text",
      "justification.",
    ]);
  });

  it("Should justify text by 25", () => {
    const justifiedText = justifyText(words, 25);

    expect(justifiedText).toStrictEqual([
      "This  is  an  example  of",
      "text       justification.",
    ]);
  });
});
