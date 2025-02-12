import reverseWordsInSentence from "./reverseWordsInSentence";

describe("Reverse Words In Sentence", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should reverse words normally", () => {
    const expectedOutcome = "blue is sky the";
    const passedData = "the sky is blue";

    const outcome = reverseWordsInSentence(passedData);

    expect(outcome).toBe(expectedOutcome);
  });
  it("Should reverse words with excessive white space", () => {
    const expectedOutcome = "blue is sky the";
    const passedData = "the   sky is  blue";

    const outcome = reverseWordsInSentence(passedData);

    expect(outcome).toBe(expectedOutcome);
  });

  // FAILED SCENARIOS & EDGE CASES
  it("Should error handle empty parameter", () => {
    const expectedOutcome = null;
    const passedData = "";

    const mockErrorLog = jest.spyOn(console, "error");
    const expectedErrorLog = "Sentence is empty";

    const outcome = reverseWordsInSentence(passedData);

    expect(outcome).toBe(expectedOutcome);
    expect(mockErrorLog.mock.calls[0][0]).toBe(expectedErrorLog);
  });
  it("Should error handle non-string values", () => {
    const expectedOutcome = null;
    const passedData = { a: "Hi!" };

    const mockErrorLog = jest.spyOn(console, "error");
    const expectedErrorLog = "Data should be a string";

    // @ts-expect-error
    const outcome = reverseWordsInSentence(passedData);

    expect(outcome).toBe(expectedOutcome);
    expect(mockErrorLog.mock.calls[0][0]).toBe(expectedErrorLog);
  });
});
