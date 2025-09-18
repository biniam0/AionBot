// Ethiopian Year 2018 -> Gregorian 2025-09-12 to 2026-09-10
const START_DATE: Date = new Date(2025, 8, 12); // September 12, 2025
const END_DATE: Date = new Date(2026, 8, 10);   // September 10, 2026

const TOTAL_DAYS: number =
  Math.floor((END_DATE.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)) + 1;

export interface Progress {
  daysPassed: number;
  percentDone: string;
  percentLeft: string;
}

export function calculateProgress(today: Date = new Date()): Progress | null {
  if (today < START_DATE || today > END_DATE) return null;

  const daysPassed = Math.floor(
    (today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)
  );
  const percentDone = (daysPassed / TOTAL_DAYS) * 100;
  const percentLeft = 100 - percentDone;

  return {
    daysPassed,
    percentDone: percentDone.toFixed(2),
    percentLeft: percentLeft.toFixed(2),
  };
}
