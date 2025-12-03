# rule-repo

A TypeScript utility library providing functions for testing and demonstration purposes, including randomization and flaky operations.

## Features

- **randomBoolean()**: Generates a random boolean value
- **randomDelay()**: Returns a promise that resolves after a random delay
- **flakyApiCall()**: Simulates an unreliable API call that may fail randomly
- **unstableCounter()**: Returns a base value with occasional random noise

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

The TypeScript source code in `src/` will be compiled to JavaScript in the `dist/` directory.

## Clean

```bash
npm run clean
```

Removes the `dist/` directory.

## CI/CD

This project uses CircleCI for continuous integration. The pipeline:
- Installs dependencies
- Builds the TypeScript project
- Stores build artifacts

## Project Structure

```
.
├── src/
│   └── utils.ts          # Utility functions
├── .circleci/
│   └── config.yml        # CircleCI configuration
├── package.json
├── tsconfig.json
└── README.md
```

## License

ISC
