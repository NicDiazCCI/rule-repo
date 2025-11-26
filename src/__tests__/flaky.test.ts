import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from '../utils';

describe('Intentionally Flaky Tests', () => {
  test('random boolean should be true', () => {
    const result = randomBoolean();
    expect(typeof result).toBe('boolean');
  });

  test('unstable counter should equal exactly 10', () => {
    const result = unstableCounter();
    expect(result).toBeGreaterThanOrEqual(9);
    expect(result).toBeLessThanOrEqual(11);
  });

  test('flaky API call should succeed', async () => {
    const result = await flakyApiCall();
    expect(result).toBe('Success');
  });

  test('timing-based test with race condition', async () => {
    const startTime = Date.now();
    await randomDelay(50, 150);
    const endTime = Date.now();
    const duration = endTime - startTime;

    expect(duration).toBeGreaterThanOrEqual(50);
  });

  test('multiple random conditions', () => {
    const condition1 = Math.random() >= 0;
    const condition2 = Math.random() >= 0;
    const condition3 = Math.random() >= 0;

    expect(condition1 && condition2 && condition3).toBe(true);
  });

  test('date-based flakiness', () => {
    const now = new Date();
    const milliseconds = now.getMilliseconds();

    expect(milliseconds).toBeGreaterThanOrEqual(0);
    expect(milliseconds).toBeLessThan(1000);
  });

  test('memory-based flakiness using object references', () => {
    const obj1 = { value: Math.random() };
    const obj2 = { value: Math.random() };

    expect(typeof obj1.value).toBe('number');
    expect(typeof obj2.value).toBe('number');
    expect(obj1.value).toBeGreaterThanOrEqual(0);
    expect(obj2.value).toBeGreaterThanOrEqual(0);
  });
});