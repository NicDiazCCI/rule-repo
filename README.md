# rule-repo

A TypeScript project with utility functions and CircleCI integration for continuous integration and testing.

## Features

- **Utility Functions**: Random boolean generation, delayed promises, flaky API call simulation, and unstable counter
- **TypeScript**: Full TypeScript support with type definitions
- **Testing**: Jest test framework with watch mode
- **CI/CD**: CircleCI configuration with automated builds and tests

## Installation

```bash
npm install
```

## Usage

```typescript
import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from './src/utils';

// Generate a random boolean
const result = randomBoolean();

// Wait for a random delay between 100-1000ms
await randomDelay();

// Simulate a flaky API call
try {
  const response = await flakyApiCall();
  console.log(response);
} catch (error) {
  console.error(error);
}

// Get an unstable counter value
const count = unstableCounter();
```

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run clean` - Remove build artifacts

## Development

This project uses:
- TypeScript 5.9.2
- Jest 30.0.5 for testing
- CircleCI for continuous integration

## CircleCI

The project includes two workflows:
- **build**: Compiles the TypeScript project and stores artifacts
- **test**: Runs the test suite and stores test results

## License

ISC
