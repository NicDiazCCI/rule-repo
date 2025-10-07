import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from '../utils';

/**
 * Stabilize tests by controlling randomness and time.
 */

describe('Intentionally Flaky Tests', () => {
  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('randomBoolean returns true when RNG is high', () => {
    const spy = jest.spyOn(Math, 'random').mockReturnValue(0.99);
    const result = randomBoolean();
    expect(result).toBe(true);
    spy.mockRestore();
  });

  test('randomBoolean returns false when RNG is low', () => {
    const spy = jest.spyOn(Math, 'random').mockReturnValue(0.01);
    const result = randomBoolean();
    expect(result).toBe(false);
    spy.mockRestore();
  });

  test('unstableCounter returns base when noise disabled', () => {
    // First call <= 0.8 disables noise path
    const spy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
    const result = unstableCounter();
    expect(result).toBe(10);
    spy.mockRestore();
  });

  test('flakyApiCall resolves on success branch', async () => {
    jest.useFakeTimers();
    // Sequence: shouldFail check (<=0.7 => success), delay (e.g., 0.1 => 50ms)
    const randomSpy = jest
      .spyOn(Math, 'random')
      .mockReturnValueOnce(0.5) // shouldFail => false
      .mockReturnValueOnce(0.1); // delay => 50ms

    const p = flakyApiCall();
    jest.advanceTimersByTime(50);
    const result = await p;
    expect(result).toBe('Success');
    randomSpy.mockRestore();
  });

  test('randomDelay waits at least the minimum delay', async () => {
    jest.useFakeTimers();
    // Force min delay
    const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0);
    const p = randomDelay(50, 150);
    jest.advanceTimersByTime(50);
    await expect(p).resolves.toBeUndefined();
    randomSpy.mockRestore();
  });

  test('multiple random conditions with deterministic true outcomes', () => {
    const spy = jest
      .spyOn(Math, 'random')
      .mockReturnValueOnce(0.99)
      .mockReturnValueOnce(0.99)
      .mockReturnValueOnce(0.99);

    const condition1 = Math.random() > 0.3;
    const condition2 = Math.random() > 0.3;
    const condition3 = Math.random() > 0.3;

    expect(condition1 && condition2 && condition3).toBe(true);
    spy.mockRestore();
  });

  test('date-based logic under fixed system time', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00.001Z'));
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    expect(milliseconds % 7).not.toBe(0);
  });

  test('deterministic comparison between two random values', () => {
    const spy = jest
      .spyOn(Math, 'random')
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.1);

    const obj1 = { value: Math.random() };
    const obj2 = { value: Math.random() };

    const compareResult = obj1.value > obj2.value;
    expect(compareResult).toBe(true);
    spy.mockRestore();
  });
});
