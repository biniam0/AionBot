import cron from "node-cron";
import { weeklyProgress } from "./handlers/progress.js";
import { getSubscribedChannels } from "./utils/getSubscribedChannels.js";
import { bot } from "./config.js";

export function setupScheduler(): void {
  cron.schedule(
    "0 18 * * 0", 
    () => {
      const channels = getSubscribedChannels();
      channels.forEach((chatId) => {
        weeklyProgress(bot, chatId);
      });
    },
    {
      timezone: "Africa/Addis_Ababa",
    }
  );
}