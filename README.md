# Rule Repo

A TypeScript utility library providing common helper functions for string manipulation, mathematical operations, and data validation.

## Features

- **Mathematical Operations**: Addition, multiplication, array summation
- **String Utilities**: Capitalization, reversal, palindrome checking
- **Data Validation**: Even number checking, input validation
- **Full TypeScript Support**: Complete type definitions and IntelliSense support
- **Comprehensive Test Coverage**: Jest-based testing with CircleCI integration

## Installation

```bash
npm install
```

## Usage

```typescript
import {
  add,
  multiply,
  capitalize,
  reverseString,
  isEven,
  isPalindrome,
  getArraySum
} from './src/utils';

// Mathematical operations
add(5, 3);           // 8
multiply(4, 7);      // 28
getArraySum([1, 2, 3, 4]); // 10

// String manipulation
capitalize('hello');  // 'Hello'
reverseString('abc'); // 'cba'

// Validation
isEven(4);           // true
isPalindrome('racecar'); // true
```

## Available Functions

### Mathematical Operations

#### `add(a: number, b: number): number`
Adds two numbers and returns the result.

#### `multiply(a: number, b: number): number`
Multiplies two numbers and returns the result.

#### `getArraySum(numbers: number[]): number`
Calculates the sum of all numbers in an array.

### String Utilities

#### `capitalize(str: string): string`
Capitalizes the first letter of a string and converts the rest to lowercase.

#### `reverseString(str: string): string`
Reverses the characters in a string.

#### `isPalindrome(str: string): boolean`
Checks if a string is a palindrome (case-insensitive, ignores non-alphanumeric characters).

### Validation

#### `isEven(num: number): boolean`
Checks if a number is even.

## Development

### Prerequisites

- Node.js (v22 or higher recommended)
- npm

### Scripts

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build TypeScript
npm run build

# Clean build artifacts
npm run clean
```

### Project Structure

```
rule-repo/
├── .circleci/
│   └── config.yml        # CircleCI pipeline configuration
├── src/
│   ├── __tests__/
│   │   └── utils.test.ts # Test suite
│   └── utils.ts          # Utility functions
├── package.json
├── tsconfig.json
└── jest.config.js
```

## Testing

The project uses Jest for unit testing with full TypeScript support via ts-jest.

```bash
npm test
```

Test results are automatically generated in JUnit format for CI/CD integration.

## Continuous Integration

This project uses CircleCI for automated testing and builds. The pipeline includes:

- **Build Workflow**: Compiles TypeScript and stores build artifacts
- **Test Workflow**: Runs unit tests with parallel test execution support

## License

ISC

## Contributing

Contributions are welcome! Please ensure all tests pass before submitting a pull request.

```bash
npm test
npm run build
```
