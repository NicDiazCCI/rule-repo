import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from '../utils';

describe('Intentionally Flaky Tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('random boolean should be true', () => {
    const result = randomBoolean(() => 0.9);
    expect(result).toBe(true);
  });

  test('unstable counter should equal exactly 10', () => {
    const result = unstableCounter(() => 0.0);
    expect(result).toBe(10);
  });

  test('flaky API call should succeed', async () => {
    jest.useFakeTimers();
    const values = [0.6, 0.0];
    const rng = () => values.shift() as number;
    const promise = flakyApiCall({ rng });
    jest.advanceTimersByTime(0);
    await expect(promise).resolves.toBe('Success');
  });

  test('timing-based test with controlled delay', async () => {
    jest.useFakeTimers();
    const p = randomDelay(50, 150, setTimeout, () => 0.0);
    jest.advanceTimersByTime(50);
    await expect(p).resolves.toBeUndefined();
  });

  test('multiple random conditions', () => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.9);

    const condition1 = Math.random() > 0.3;
    const condition2 = Math.random() > 0.3;
    const condition3 = Math.random() > 0.3;
    
    expect(condition1 && condition2 && condition3).toBe(true);
  });

  test('date-based determinism', () => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01T00:00:00.123Z'));
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    expect(milliseconds % 7).not.toBe(0);
  });

  test('deterministic object value comparison', () => {
    jest.spyOn(Math, 'random').mockReturnValueOnce(0.8).mockReturnValueOnce(0.2);
    const obj1 = { value: Math.random() };
    const obj2 = { value: Math.random() };
    const compareResult = obj1.value > obj2.value;
    expect(compareResult).toBe(true);
  });
});
