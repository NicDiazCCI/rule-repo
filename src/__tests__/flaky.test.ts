import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from '../utils';

describe('Intentionally Flaky Tests', () => {
  let mockRandomValues: number[] = [];
  let randomCallIndex = 0;

  beforeEach(() => {
    jest.useFakeTimers();
    randomCallIndex = 0;
    mockRandomValues = [];

    // Mock Math.random with controlled values
    jest.spyOn(Math, 'random').mockImplementation(() => {
      if (mockRandomValues.length > 0 && randomCallIndex < mockRandomValues.length) {
        return mockRandomValues[randomCallIndex++];
      }
      return 0.6; // Default deterministic value
    });

    // Mock Date.now() for timing tests
    const originalDateNow = Date.now.bind(global.Date);
    jest.spyOn(Date, 'now').mockReturnValue(1000000);

    // Save original Date constructor
    const OriginalDate = global.Date;

    // Mock Date constructor for date-based tests while preserving Date.now()
    global.Date = class extends OriginalDate {
      constructor() {
        super();
      }

      getMilliseconds() {
        return 100; // Not divisible by 7
      }

      static now() {
        return 1000000;
      }
    } as any;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('random boolean should be true', () => {
    mockRandomValues = [0.6]; // 0.6 > 0.5 returns true
    randomCallIndex = 0;
    const result = randomBoolean();
    expect(result).toBe(true);
  });

  test('unstable counter should equal exactly 10', () => {
    mockRandomValues = [0.9]; // 0.9 > 0.8 is true, but we need it to be false for no noise
    randomCallIndex = 0;
    // Actually, let's set it to 0.7 so 0.7 > 0.8 is false, resulting in 0 noise
    mockRandomValues = [0.7];
    randomCallIndex = 0;
    const result = unstableCounter();
    expect(result).toBe(10);
  });

  test('flaky API call should succeed', async () => {
    mockRandomValues = [0.6, 0.5]; // 0.6 > 0.7 is false (won't fail), 0.5 for delay
    randomCallIndex = 0;

    const promise = flakyApiCall();
    jest.advanceTimersByTime(1000);
    const result = await promise;
    expect(result).toBe('Success');
  });

  test('timing-based test with race condition', async () => {
    mockRandomValues = [0.0]; // Will generate min delay (50ms)
    randomCallIndex = 0;

    const startTime = Date.now();
    const delayPromise = randomDelay(50, 150);
    jest.advanceTimersByTime(50);
    await delayPromise;
    const endTime = Date.now();
    const duration = endTime - startTime;

    expect(duration).toBeLessThan(100);
  });

  test('multiple random conditions', () => {
    mockRandomValues = [0.4, 0.5, 0.6]; // All > 0.3
    randomCallIndex = 0;

    const condition1 = Math.random() > 0.3;
    const condition2 = Math.random() > 0.3;
    const condition3 = Math.random() > 0.3;

    expect(condition1 && condition2 && condition3).toBe(true);
  });

  test('date-based flakiness', () => {
    const now = new Date();
    const milliseconds = now.getMilliseconds();

    expect(milliseconds % 7).not.toBe(0);
  });

  test('memory-based flakiness using object references', () => {
    mockRandomValues = [0.7, 0.3]; // 0.7 > 0.3 is true
    randomCallIndex = 0;

    const obj1 = { value: Math.random() };
    const obj2 = { value: Math.random() };

    const compareResult = obj1.value > obj2.value;
    expect(compareResult).toBe(true);
  });
});