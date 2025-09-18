import cron from "node-cron";
import { weeklyProgress } from "./handlers/progress.js";
import { bot } from "./bot.js";
import { CHAT_ID } from "./config.js";

export function setupScheduler(): void {
  cron.schedule("* * * * *", () => {
    weeklyProgress(bot, CHAT_ID);
  });
}
