# rule-repo

A TypeScript utility library providing common helper functions for string and number manipulation.

## Features

- **Math Utilities**: Addition, multiplication, and array sum operations
- **String Utilities**: Capitalization, reversal, and palindrome checking
- **Number Utilities**: Even number detection
- **Type-safe**: Written in TypeScript with full type definitions
- **Well-tested**: Comprehensive test coverage with Jest
- **CI/CD**: Automated testing and building with CircleCI

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
  isPalindrome,
  isEven,
  getArraySum
} from './src/utils';

// Math operations
add(2, 3);              // 5
multiply(4, 5);         // 20
getArraySum([1, 2, 3]); // 6

// Number checking
isEven(4);              // true
isEven(5);              // false

// String manipulation
capitalize('hello');           // 'Hello'
reverseString('world');        // 'dlrow'
isPalindrome('A man a plan');  // true (ignores case and non-alphanumeric)
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run all tests using Jest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run clean` | Remove the dist directory |

## API Reference

### Math Functions

#### `add(a: number, b: number): number`
Returns the sum of two numbers.

#### `multiply(a: number, b: number): number`
Returns the product of two numbers.

#### `getArraySum(numbers: number[]): number`
Calculates the sum of all numbers in an array.

### Number Functions

#### `isEven(num: number): boolean`
Checks if a number is even.

### String Functions

#### `capitalize(str: string): string`
Capitalizes the first letter of a string and lowercases the rest.

#### `reverseString(str: string): string`
Reverses a string.

#### `isPalindrome(str: string): boolean`
Checks if a string is a palindrome (ignores case and non-alphanumeric characters).

## Development

### Prerequisites

- Node.js (v22 or higher recommended)
- npm

### Running Tests

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch
```

### Building

```bash
# Compile TypeScript
npm run build

# Clean build artifacts
npm run clean
```

## CI/CD

This project uses CircleCI for continuous integration and deployment. The pipeline includes:

- **Build Workflow**: Compiles TypeScript and stores build artifacts
- **Test Workflow**: Runs unit tests with test splitting for parallel execution

### CircleCI Configuration

- Node.js builds with dependency caching
- Test results stored in JUnit format
- Build artifacts automatically stored

## Project Structure

```
rule-repo/
├── .circleci/
│   └── config.yml          # CircleCI pipeline configuration
├── src/
│   ├── __tests__/
│   │   └── utils.test.ts   # Unit tests
│   └── utils.ts            # Utility functions
├── jest.config.js          # Jest configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## License

ISC

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request
