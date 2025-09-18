import cron from "node-cron";
import { weeklyProgress } from "./handlers/progress.js";
import { bot } from "./bot.js";
import { getSubscribedChannels } from "./utils/getSubscribedChannels.js";

export function setupScheduler(): void {
  cron.schedule("* * * * *", () => {
    const channels = getSubscribedChannels();
    channels.forEach((chatId) => {
      weeklyProgress(bot, chatId);
    });
  });
}
