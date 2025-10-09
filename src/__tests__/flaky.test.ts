import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from '../utils';

// Make tests deterministic by mocking randomness, timers, and clock
afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
});

describe('Intentionally Flaky Tests', () => {
  test('random boolean should be true', () => {
    const rand = jest.spyOn(Math, 'random');
    rand.mockReturnValue(0.9); // > 0.5 -> true
    const result = randomBoolean();
    expect(result).toBe(true);
  });

  test('random boolean should be false', () => {
    const rand = jest.spyOn(Math, 'random');
    rand.mockReturnValue(0.1); // <= 0.5 -> false
    const result = randomBoolean();
    expect(result).toBe(false);
  });

  test('unstable counter should equal exactly 10', () => {
    // Force no noise path so result is exactly 10
    const rand = jest.spyOn(Math, 'random');
    rand.mockReturnValue(0.5); // <= 0.8 so noise = 0
    const result = unstableCounter();
    expect(result).toBe(10);
  });

  test('flaky API call should succeed', async () => {
    jest.useFakeTimers();
    const rand = jest.spyOn(Math, 'random');
    // Force success path and zero delay
    rand.mockReturnValueOnce(0.0) // shouldFail = false
        .mockReturnValueOnce(0.0); // delay = 0ms

    const promise = flakyApiCall();
    jest.runAllTimers();
    await expect(promise).resolves.toBe('Success');
  });

  test('timing-based test with race condition', async () => {
    jest.useFakeTimers();
    const rand = jest.spyOn(Math, 'random');
    // Force minimal delay of 50ms for (50,150)
    rand.mockReturnValue(0.0);

    const promise = randomDelay(50, 150);
    jest.advanceTimersByTime(50);
    await expect(promise).resolves.toBeUndefined();
  });

  test('multiple random conditions', () => {
    const rand = jest.spyOn(Math, 'random');
    // Force all conditions true (> 0.3)
    rand.mockReturnValueOnce(0.9).mockReturnValueOnce(0.9).mockReturnValueOnce(0.9);

    const condition1 = Math.random() > 0.3;
    const condition2 = Math.random() > 0.3;
    const condition3 = Math.random() > 0.3;

    expect(condition1 && condition2 && condition3).toBe(true);
  });

  test('date-based flakiness', () => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01T00:00:00.001Z'));
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    expect(milliseconds % 7).not.toBe(0); // 1 % 7 = 1
  });

  test('memory-based flakiness using object references', () => {
    const rand = jest.spyOn(Math, 'random');
    // Ensure obj1.value > obj2.value deterministically
    rand.mockReturnValueOnce(0.9).mockReturnValueOnce(0.1);

    const obj1 = { value: Math.random() };
    const obj2 = { value: Math.random() };

    const compareResult = obj1.value > obj2.value;
    expect(compareResult).toBe(true);
  });
});
