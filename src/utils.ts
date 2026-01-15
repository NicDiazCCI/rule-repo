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

export function randomBoolean(): boolean {
  return Math.random() > 0.5;
}

export function randomDelay(min: number = 100, max: number = 1000): Promise<void> {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function flakyApiCall(): Promise<string> {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() > 0.7;
    const delay = Math.random() * 500;

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network timeout'));
      } else {
        resolve('Success');
      }
    }, delay);
  });
}

export function unstableCounter(): number {
  const base = 10;
  const noise = Math.random() > 0.8 ? Math.floor(Math.random() * 3) - 1 : 0;
  return base + noise;
}
