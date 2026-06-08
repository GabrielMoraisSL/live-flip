export function calculatePercentage(unlockeds: number, total: number): number {
  let calculatedValue: number = 0;
  if (total !== 0) calculatedValue = Math.round((unlockeds / total) * 100);
  return calculatedValue;
}
