import TelegramBot from "node-telegram-bot-api";
import { calculateProgress } from "../services/calendar.js";
import { generateProgressBar } from "../utils/generateProgressBar.js";
import { getCurrentEthiopianYearAndWeek } from "../utils/getCurrentEthiopianYear.js";

export function weeklyProgress(bot: TelegramBot, chatId: string): void {
  const {ethYear, weekNumber} = getCurrentEthiopianYearAndWeek();
  const progress = calculateProgress(ethYear);

  if (!progress) {
    bot.sendMessage(chatId, `We are outside the Ethiopian year ${ethYear}.`);
    return;
  }

  const percentDone = parseFloat(progress.percentDone);
  const bar = generateProgressBar(percentDone, 20);

  const msg = `${ethYear} EC: Week ${weekNumber}
${bar} ${progress.percentLeft}%`;

  bot.sendMessage(chatId, msg);
}
