/**
 * Convert Ethiopian year to Gregorian start and end dates
 * @param ethYear Ethiopian year
 * @returns [startDate, endDate]
 */
export function ethiopianYearToGregorian(ethYear: number): [Date, Date] {
  const gregYear = ethYear + 7;
  const startMonth = 8;
  const startDay = isGregorianLeap(gregYear + 1) ? 12 : 11; 

  const startDate = new Date(gregYear, startMonth, startDay);
  const endDate = new Date(gregYear + 1, startMonth, startDay - 1);

  return [startDate, endDate];
}

export function isGregorianLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}