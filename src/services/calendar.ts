import { Progress } from "../types/types.js";
import { ethiopianYearToGregorian } from "../utils/ECToGC.js";

export function calculateProgress(ethYear: number, today: Date = new Date()): Progress | null {
  const [startDate, endDate] = ethiopianYearToGregorian(ethYear);

  if (today < startDate || today > endDate) return null;

  const totalDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const percentDone = (daysPassed / totalDays) * 100;
  const percentLeft = 100 - percentDone;

  return {
    daysPassed,
    percentDone: percentDone.toFixed(2),
    percentLeft: percentLeft.toFixed(2),
  };
}