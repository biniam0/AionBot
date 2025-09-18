import { ethiopianYearToGregorian } from "./ECToGC.js";

export function getCurrentEthiopianYearAndWeek(date: Date = new Date()): {
  ethYear: number;
  weekNumber: number;
} {
  const gregYear = date.getFullYear();
  const month = date.getMonth();
  const ethYear = month < 8 ? gregYear - 8 : gregYear - 7;

  const [startDate, endDate] = ethiopianYearToGregorian(ethYear);
  const diffMs = date.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const weekNumber = Math.floor(diffDays / 7) + 1;

  return { ethYear, weekNumber };
}
