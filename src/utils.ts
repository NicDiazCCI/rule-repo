export interface RandomGenerator {
  random(): number;
}

export const defaultRandom: RandomGenerator = {
  random: () => Math.random()
};

export function randomBoolean(rng: RandomGenerator = defaultRandom): boolean {
  return rng.random() > 0.5;
}

export function randomDelay(min: number = 100, max: number = 1000, rng: RandomGenerator = defaultRandom): Promise<void> {
  const delay = Math.floor(rng.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function flakyApiCall(rng: RandomGenerator = defaultRandom): Promise<string> {
  return new Promise((resolve, reject) => {
    const shouldFail = rng.random() > 0.7;
    const delay = rng.random() * 500;

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network timeout'));
      } else {
        resolve('Success');
      }
    }, delay);
  });
}

export function unstableCounter(rng: RandomGenerator = defaultRandom): number {
  const base = 10;
  const noise = rng.random() > 0.8 ? Math.floor(rng.random() * 3) - 1 : 0;
  return base + noise;
}