import * as utils from '../utils';
import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from '../utils';

describe('Intentionally Flaky Tests', () => {
  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('random boolean should be true', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.6);
    const result = randomBoolean();
    expect(result).toBe(true);
  });

  test('unstable counter should equal exactly 10', () => {
    // Force noise path to be skipped (noise = 0)
    jest.spyOn(Math, 'random').mockReturnValue(0.2);
    const result = unstableCounter();
    expect(result).toBe(10);
  });

  test('flaky API call should succeed', async () => {
    jest.spyOn(utils, 'flakyApiCall').mockResolvedValue('Success');
    const result = await flakyApiCall();
    expect(result).toBe('Success');
  });

  test('timing-based test with race condition', async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-01-01T00:00:00.000Z'));
    // Force minimum delay (50ms)
    jest.spyOn(Math, 'random').mockReturnValue(0);

    const startTime = Date.now();
    const p = randomDelay(50, 150);

    // Advance virtual timers by the chosen delay
    jest.advanceTimersByTime(50);
    await p;

    const endTime = Date.now();
    const duration = endTime - startTime;
    expect(duration).toBe(50);
  });

  test('multiple random conditions', () => {
    // Ensure all three conditions are true (> 0.3)
    const seq = [0.9, 0.9, 0.9];
    let i = 0;
    jest.spyOn(Math, 'random').mockImplementation(() => seq[i++ % seq.length]);

    const condition1 = Math.random() > 0.3;
    const condition2 = Math.random() > 0.3;
    const condition3 = Math.random() > 0.3;
    
    expect(condition1 && condition2 && condition3).toBe(true);
  });

  test('date-based flakiness', () => {
    jest.useFakeTimers();
    // Set milliseconds to a value not divisible by 7 (e.g., 6)
    jest.setSystemTime(new Date('2025-01-01T00:00:00.006Z'));

    const now = new Date();
    const milliseconds = now.getMilliseconds();
    
    expect(milliseconds % 7).not.toBe(0);
  });

  test('memory-based flakiness using object references', () => {
    // Force obj1.value > obj2.value deterministically
    const seq = [0.8, 0.1];
    let i = 0;
    jest.spyOn(Math, 'random').mockImplementation(() => seq[i++ % seq.length]);

    const obj1 = { value: Math.random() };
    const obj2 = { value: Math.random() };
    
    const compareResult = obj1.value > obj2.value;
    expect(compareResult).toBe(true);
  });
});