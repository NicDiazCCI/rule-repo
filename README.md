# Utility Functions Project

A TypeScript project with utility functions for common operations.

## Test Coverage

The project has basic test coverage for all utility functions:

- **Coverage**: All 7 utility functions in `src/utils.ts` have corresponding tests
- **Test file**: `src/__tests__/utils.test.ts` (7 test cases)
- **Functions tested**: `add`, `multiply`, `isEven`, `capitalize`, `reverseString`, `getArraySum`, `isPalindrome`

Tests cover basic functionality and some edge cases (empty strings, negative numbers, case sensitivity), but lack comprehensive edge case testing, error handling scenarios, and type validation.

## Running Tests

```bash
npm test           # Run tests once
npm run test:watch # Run tests in watch mode
```
