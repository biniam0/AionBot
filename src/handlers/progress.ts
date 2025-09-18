import TelegramBot from "node-telegram-bot-api";
import { calculateProgress } from "../services/calendar.js";
import { getCurrentEthiopianYear } from "../utils/getCurrentEthiopianYear.js";

export function weeklyProgress(bot: TelegramBot, chatId: string): void {
  const ethYear = getCurrentEthiopianYear();
  const progress = calculateProgress(ethYear);

  if (!progress) {
    bot.sendMessage(chatId, `We are outside the Ethiopian year ${ethYear}.`);
    return;
  }

  const msg = `📅 Ethiopian Year ${ethYear} Progress
✅ ${progress.percentDone}% Completed
🕒 ${progress.percentLeft}% Remaining`;

  bot.sendMessage(chatId, msg);
}
