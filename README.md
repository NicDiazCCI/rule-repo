# rule-repo

A TypeScript utility library with common helper functions for mathematical operations, string manipulation, and array processing.

## Features

This library provides the following utility functions:

- **Mathematical Operations**
  - `add(a, b)` - Adds two numbers
  - `multiply(a, b)` - Multiplies two numbers
  - `isEven(num)` - Checks if a number is even

- **String Manipulation**
  - `capitalize(str)` - Capitalizes the first letter of a string
  - `reverseString(str)` - Reverses a string
  - `isPalindrome(str)` - Checks if a string is a palindrome (ignores case and non-alphanumeric characters)

- **Array Operations**
  - `getArraySum(numbers)` - Calculates the sum of an array of numbers

## Installation

```bash
npm install
```

## Development

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test:watch
```

### Clean

Remove build artifacts:

```bash
npm run clean
```

## CI/CD

This project uses CircleCI for continuous integration with automated builds and tests.

## License

ISC
