import {
  add,
  multiply,
  isEven,
  capitalize,
  reverseString,
  getArraySum,
  isPalindrome,
} from "../utils";

describe("Utility Tests", () => {
  test("addition works with positive numbers", () => {
    const result = add(10, 5);
    expect(result).toBe(15);
  });

  test("multiplication handles negative numbers", () => {
    const result = multiply(-3, 4);
    expect(result).toBe(-12);
  });

  test("even number detection is accurate", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(-4)).toBe(true);
  });

  test("string capitalization handles edge cases", () => {
    expect(capitalize("")).toBe("");
    expect(capitalize("a")).toBe("A");
    expect(capitalize("HELLO")).toBe("Hello");
  });

  test("string reversal works for all lengths", () => {
    expect(reverseString("")).toBe("");
    expect(reverseString("single")).toBe("elgnis");
    expect(reverseString("12345")).toBe("54321");
  });

  test("array sum calculation handles various inputs", () => {
    expect(getArraySum([1, 2, 3])).toBe(6);
    expect(getArraySum([-1, -2, -3])).toBe(-6);
    expect(getArraySum([0])).toBe(0);
  });

  test("palindrome detection ignores case and punctuation", () => {
    expect(isPalindrome("Madam")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
  });
});
