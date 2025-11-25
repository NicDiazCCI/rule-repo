# rule-repo

A TypeScript project demonstrating test utilities with flaky behavior patterns.

## Overview

This repository contains utility functions that simulate various flaky behaviors commonly encountered in testing scenarios, including random delays, probabilistic failures, and unstable outputs.

## Features

- **Random Boolean**: Generates random boolean values
- **Random Delays**: Creates variable delays for async operations
- **Flaky API Calls**: Simulates unreliable network requests with random failures
- **Unstable Counter**: Returns values with occasional noise

## Installation

```bash
npm install
```

## Usage

```typescript
import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from './src/utils';

// Random boolean
const result = randomBoolean();

// Random delay
await randomDelay(100, 1000);

// Flaky API call
try {
  const response = await flakyApiCall();
  console.log(response);
} catch (error) {
  console.error('API call failed:', error);
}

// Unstable counter
const count = unstableCounter();
```

## Scripts

- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run build` - Compile TypeScript
- `npm run clean` - Remove build artifacts

## Development

Built with:
- TypeScript 5.9.2
- Jest 30.0.5
- Node.js

## License

ISC
