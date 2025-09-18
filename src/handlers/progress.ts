import TelegramBot from "node-telegram-bot-api";
import { calculateProgress } from "../services/calendar.js";

export function weeklyProgress(bot: TelegramBot, chatId: string): void {
  const progress = calculateProgress();
  if (!progress) {
    bot.sendMessage(chatId, "We are outside the Ethiopian year 2018.");
    return;
  }

  const msg = `📅 Ethiopian Year 2018 Progress
               ✅ ${progress.percentDone}% Completed
               🕒 ${progress.percentLeft}% Remaining`;

  bot.sendMessage(chatId, msg);
}
