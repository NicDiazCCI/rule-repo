export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function getArraySum(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// testing changes
