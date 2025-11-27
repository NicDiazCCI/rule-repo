# rule-repo

A TypeScript utility library with flaky test utilities.

## Overview

This project provides utility functions for testing scenarios that involve randomness, delays, and simulated failures.

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

## Clean

```bash
npm run clean
```

## Utilities

- `randomBoolean()`: Returns a random boolean value
- `randomDelay(min?, max?)`: Returns a promise that resolves after a random delay
- `flakyApiCall()`: Simulates an API call that randomly fails
- `unstableCounter()`: Returns a counter with occasional noise

## CI/CD

This project uses CircleCI for continuous integration. The pipeline builds the TypeScript project and stores build artifacts.
