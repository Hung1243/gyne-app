export function getRandomValue(values: any[]) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error('Please provide a non-empty array of values.');
  }
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
