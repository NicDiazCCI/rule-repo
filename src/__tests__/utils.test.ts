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
  describe("add", () => {
    test("addition works with positive numbers", () => {
      const result = add(10, 5);
      expect(result).toBe(15);
    });

    test("addition works with negative numbers", () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test("addition works with zero", () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
    });

    test("addition works with decimal numbers", () => {
      expect(add(1.5, 2.3)).toBeCloseTo(3.8);
    });
  });

  describe("multiply", () => {
    test("multiplication handles negative numbers", () => {
      const result = multiply(-3, 4);
      expect(result).toBe(-12);
    });

    test("multiplication with zero returns zero", () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test("multiplication with positive numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test("multiplication with decimals", () => {
      expect(multiply(2.5, 4)).toBeCloseTo(10);
    });
  });

  describe("isEven", () => {
    test("even number detection is accurate", () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(3)).toBe(false);
      expect(isEven(-4)).toBe(true);
    });

    test("zero is even", () => {
      expect(isEven(0)).toBe(true);
    });

    test("odd negative numbers", () => {
      expect(isEven(-3)).toBe(false);
    });
  });

  describe("capitalize", () => {
    test("string capitalization handles edge cases", () => {
      expect(capitalize("")).toBe("");
      expect(capitalize("a")).toBe("A");
      expect(capitalize("HELLO")).toBe("Hello");
    });

    test("handles lowercase strings", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    test("handles mixed case strings", () => {
      expect(capitalize("hELLo")).toBe("Hello");
    });

    test("handles single character uppercase", () => {
      expect(capitalize("H")).toBe("H");
    });
  });

  describe("reverseString", () => {
    test("string reversal works for all lengths", () => {
      expect(reverseString("")).toBe("");
      expect(reverseString("single")).toBe("elgnis");
      expect(reverseString("12345")).toBe("54321");
    });

    test("handles single character", () => {
      expect(reverseString("a")).toBe("a");
    });

    test("handles palindromes", () => {
      expect(reverseString("aba")).toBe("aba");
    });

    test("handles special characters", () => {
      expect(reverseString("!@#$")).toBe("$#@!");
    });
  });

  describe("getArraySum", () => {
    test("array sum calculation handles various inputs", () => {
      expect(getArraySum([1, 2, 3])).toBe(6);
      expect(getArraySum([-1, -2, -3])).toBe(-6);
      expect(getArraySum([0])).toBe(0);
    });

    test("handles empty array", () => {
      expect(getArraySum([])).toBe(0);
    });

    test("handles mixed positive and negative numbers", () => {
      expect(getArraySum([1, -1, 2, -2])).toBe(0);
    });

    test("handles large arrays", () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
      expect(getArraySum(largeArray)).toBe(500500);
    });

    test("handles decimal numbers", () => {
      expect(getArraySum([1.5, 2.5, 3.5])).toBeCloseTo(7.5);
    });
  });

  describe("isPalindrome", () => {
    test("palindrome detection ignores case and punctuation", () => {
      expect(isPalindrome("Madam")).toBe(true);
      expect(isPalindrome("race a car")).toBe(false);
      expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    });

    test("handles empty string", () => {
      expect(isPalindrome("")).toBe(true);
    });

    test("handles single character", () => {
      expect(isPalindrome("a")).toBe(true);
    });

    test("handles numeric palindromes", () => {
      expect(isPalindrome("12321")).toBe(true);
      expect(isPalindrome("12345")).toBe(false);
    });

    test("handles alphanumeric palindromes", () => {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });
  });
});
