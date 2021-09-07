export function randomIntFromInterval(min: number, max: number) {
  // min and max inkluderat
  return Math.floor(Math.random() * (max - min + 1) + min);
}
