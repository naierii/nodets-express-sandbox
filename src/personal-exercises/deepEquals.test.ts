import deepEquals from "./deepEquals";

/**
 * PRIMITIVES
 *
 * string
 * number
 * undefined
 * null (warning - typeof is object)
 * boolean
 *  true
 *  false
 *
 *
 * OBJECTS
 *
 * array
 * object
 */

// TODO - Fix Jest configuration that causes an error when auto running after save
// TODO - Use a warning when there's a commented TODO. Check Husky if it works on this case.
describe("deepEquals", () => {
  it("should compare primitives correctly", () => {
    // string
    expect(deepEquals("hello", "hello")).toBe(true);
    expect(deepEquals("bonjour", "hello")).toBe(false);

    // int
    expect(deepEquals(5, 5)).toBe(true);
    expect(deepEquals(5, 10)).toBe(false);

    // boolean
    expect(deepEquals(true, true)).toBe(true);
    expect(deepEquals(false, false)).toBe(true);
    expect(deepEquals(true, false)).toBe(false);

    // int vs string
    expect(deepEquals(5, "5")).toBe(false);

    // NaN
    expect(deepEquals(NaN, NaN)).toBe(true);
    expect(deepEquals(NaN, "someString")).toBe(false);

    // two falsey
    expect(deepEquals(null, null)).toBe(true);
    expect(deepEquals(undefined, undefined)).toBe(true);

    expect(deepEquals(null, undefined)).toBe(false);
    expect(deepEquals(null, "")).toBe(false);
    expect(deepEquals(null, 0)).toBe(false);
    expect(deepEquals(undefined, "")).toBe(false);
    expect(deepEquals(undefined, 0)).toBe(false);
    expect(deepEquals("", 0)).toBe(false);
  });

  it("should compare arrays correctly", () => {
    // Same array
    expect(deepEquals([1, 2, 3], [1, 2, 3])).toBe(true);
    // Different lengths
    expect(deepEquals([1, 2, 3], [1, 2])).toBe(false);
    // Different order
    expect(deepEquals([1, 2, 3], [3, 2, 1])).toBe(false);
    // Nested arrays
    expect(deepEquals([1, [2, 3]], [1, [2, 3]])).toBe(true);
    expect(deepEquals([1, [2, 3]], [1, [3, 2]])).toBe(false);
    // Arrays with different types
    expect(deepEquals([1, 2, 3], ["1", 2, 3])).toBe(false);
  });

  it("should compare objects correctly", () => {
    // Same object
    expect(deepEquals({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    // Different keys
    expect(deepEquals({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
    // Different values
    expect(deepEquals({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    // Nested objects
    expect(deepEquals({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })).toBe(true);
    expect(deepEquals({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })).toBe(
      false
    );
    // Objects with different types
    expect(deepEquals({ a: 1, b: 2 }, { a: "1", b: 2 })).toBe(false);
  });

  it("should compare null and objects correctly", () => {
    expect(deepEquals(null, {})).toBe(false);
    expect(deepEquals({}, null)).toBe(false);
  });

  it("should compare undefined and objects correctly", () => {
    expect(deepEquals(undefined, {})).toBe(false);
    expect(deepEquals({}, undefined)).toBe(false);
  });

  it("should compare handle edge cases", () => {
    expect(deepEquals(Infinity, Infinity)).toBe(true);
    expect(deepEquals(Infinity, 1)).toBe(false);

    // Compare declared undefined value and undefined key, should be false
    // Cases like this is handled by different length
    expect(deepEquals({ a: undefined, b: 1 }, { b: 1 })).toBe(false);
    // Different length case
    expect(deepEquals({ a: undefined, b: 1 }, { b: 1, c: 2 })).toBe(false);
  });
});
