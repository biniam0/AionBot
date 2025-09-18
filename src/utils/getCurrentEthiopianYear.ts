export function getCurrentEthiopianYear(date: Date = new Date()): number {
  const gregYear = date.getFullYear();
  const month = date.getMonth();
  return month < 8 ? gregYear - 8 : gregYear - 7;
}