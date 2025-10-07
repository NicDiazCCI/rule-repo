import { randomBoolean, randomDelay, flakyApiCall, unstableCounter } from '../utils';

describe('Intentionally Flaky Tests (made deterministic)', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('randomBoolean returns true when rand > 0.5', () => {
    expect(randomBoolean(() => 0.6)).toBe(true);
  });

  test('randomBoolean returns false when rand <= 0.5', () => {
    expect(randomBoolean(() => 0.5)).toBe(false);
  });

  test('unstableCounter returns 10 when no noise (rand <= 0.8)', () => {
    expect(unstableCounter(() => 0.5)).toBe(10);
  });

  test('unstableCounter increases by 1 when noise triggers', () => {
    const seq = [0.9, 0.9]; // >0.8 then floor(0.9*3)-1 => 2-1 => +1
    const rand = () => seq.shift() as number;
    expect(unstableCounter(rand)).toBe(11);
  });

  test('unstableCounter decreases by 1 when noise triggers', () => {
    const seq = [0.95, 0.0]; // >0.8 then floor(0*3)-1 => -1
    const rand = () => seq.shift() as number;
    expect(unstableCounter(rand)).toBe(9);
  });

  test('flakyApiCall resolves when forced to succeed', async () => {
    jest.useFakeTimers();
    const seq = [0.1, 0]; // shouldFail=false, delay=0
    const rand = () => seq.shift() as number;
    const p = flakyApiCall(rand, setTimeout);
    jest.runAllTimers();
    await expect(p).resolves.toBe('Success');
  });

  test('flakyApiCall rejects when forced to fail', async () => {
    jest.useFakeTimers();
    const seq = [0.9, 0]; // shouldFail=true, delay=0
    const rand = () => seq.shift() as number;
    const p = flakyApiCall(rand, setTimeout);
    jest.runAllTimers();
    await expect(p).rejects.toThrow('Network timeout');
  });

  test('randomDelay resolves after chosen delay using fake timers', async () => {
    jest.useFakeTimers();
    const p = randomDelay(50, 150, () => 0, setTimeout); // delay=50
    jest.advanceTimersByTime(49);
    let settled = false;
    p.then(() => { settled = true; });
    expect(settled).toBe(false);
    jest.advanceTimersByTime(1);
    await expect(p).resolves.toBeUndefined();
  });

  test('multiple random conditions deterministic true', () => {
    const spy = jest
      .spyOn(Math, 'random')
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.9)
      .mockReturnValueOnce(0.9);

    const condition1 = Math.random() > 0.3;
    const condition2 = Math.random() > 0.3;
    const condition3 = Math.random() > 0.3;

    expect(condition1 && condition2 && condition3).toBe(true);
    spy.mockRestore();
  });

  test('date-based check using fixed system time', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00.005Z'));
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    expect(milliseconds % 7).not.toBe(0);
  });

  test('deterministic object value comparison', () => {
    const obj1 = { value: 0.8 };
    const obj2 = { value: 0.2 };
    const compareResult = obj1.value > obj2.value;
    expect(compareResult).toBe(true);
  });
});
