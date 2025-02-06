import findLongestPalindrome from "./findLongestPalindrome";

describe("Find Longest Palindrome", () => {
  it('Should return "anana" from "Banana"', () => {
    const expectedResult = "anana";

    const testString = "Banana";
    const longestPalindrome = findLongestPalindrome(testString);

    expect(longestPalindrome).toBe(expectedResult);
  });
  it('Should return "racecar" from "Racecar"', () => {
    const expectedResult = "racecar";

    const testString = "Racecar";
    const longestPalindrome = findLongestPalindrome(testString);

    expect(longestPalindrome).toBe(expectedResult);
  });
  it('Should return "abccba" from "abccba"', () => {
    const expectedResult = "abccba";

    const testString = "abccba";
    const longestPalindrome = findLongestPalindrome(testString);

    expect(longestPalindrome).toBe(expectedResult);
  });
  it('Should return "a" from "a"', () => {
    const expectedResult = "a";

    const testString = "a";
    const longestPalindrome = findLongestPalindrome(testString);

    expect(longestPalindrome).toBe(expectedResult);
  });
  it('Should return "" from ""', () => {
    const expectedResult = "";

    const testString = "";
    const longestPalindrome = findLongestPalindrome(testString);

    expect(longestPalindrome).toBe(expectedResult);
  });
  it('Should return "12321" from "12321"', () => {
    const expectedResult = "12321";

    const testString = "12321";
    const longestPalindrome = findLongestPalindrome(testString);

    expect(longestPalindrome).toBe(expectedResult);
  });
});
