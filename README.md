# rule-repo

A TypeScript project demonstrating flaky test patterns and CI/CD integration with CircleCI.

## Features

- TypeScript utility functions for testing scenarios
- Jest test suite with flaky test examples
- CircleCI integration with automated build and test workflows
- Test parallelization support

## Prerequisites

- Node.js (v22 or higher recommended)
- npm

## Installation

```bash
npm install
```

## Usage

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Testing

Run tests once:

```bash
npm test
```

or

```bash
npm run test:run
```

Watch mode for development:

```bash
npm run test:watch
```

### Clean

Remove build artifacts:

```bash
npm run clean
```

## Project Structure

```
.
├── src/
│   ├── __tests__/      # Test files
│   └── utils.ts        # Utility functions
├── .circleci/
│   └── config.yml      # CircleCI configuration
├── jest.config.js      # Jest configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Utilities

The project includes several utility functions in `src/utils.ts`:

- `randomBoolean()`: Returns a random boolean value
- `randomDelay(min, max)`: Returns a promise that resolves after a random delay
- `flakyApiCall()`: Simulates an unreliable API call
- `unstableCounter()`: Returns a counter with occasional random noise

## CircleCI Integration

The project uses CircleCI for continuous integration with two workflows:

1. **Build**: Compiles the TypeScript project and stores build artifacts
2. **Test**: Runs the test suite with test splitting for parallelization

## License

ISC
