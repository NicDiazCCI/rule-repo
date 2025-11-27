# rule-repo

A TypeScript project with utilities for testing flaky behavior patterns, configured with CircleCI for continuous integration.

## Features

- **Utility Functions**: Collection of functions that simulate flaky/unstable behavior for testing purposes
  - `randomBoolean()`: Returns random boolean values
  - `randomDelay()`: Creates random delays between operations
  - `flakyApiCall()`: Simulates API calls that randomly fail
  - `unstableCounter()`: Returns values with occasional noise

## Prerequisites

- Node.js (v22+ recommended)
- npm

## Installation

```bash
npm install
```

## Usage

```typescript
import { randomBoolean, flakyApiCall, unstableCounter } from './src/utils';

// Use the utility functions in your tests or application
const result = await flakyApiCall();
```

## Scripts

- `npm test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run build` - Build TypeScript to JavaScript
- `npm run clean` - Remove build artifacts

## Testing

The project uses Jest for testing with TypeScript support via ts-jest.

```bash
npm test
```

## CI/CD

This project is configured with CircleCI for automated building and testing. The pipeline includes:

- **Build Job**: Compiles TypeScript and stores build artifacts
- **Test Job**: Runs the test suite with parallel test execution support

## License

ISC
