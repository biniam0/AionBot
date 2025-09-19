export function generateProgressBar(
  percent: number,
  length: number = 20
): string {
  const filledLength = Math.round((percent / 100) * length);
  const emptyLength = length - filledLength;
  const bar = "█".repeat(filledLength) + "░".repeat(emptyLength);
  return bar;
}
