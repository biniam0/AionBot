import { bot } from "./config.js";
import { subscribeChannel } from "./handlers/subscription.js";

export function initBot(): void {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "👋 Welcome to AionBot!");
  });

  subscribeChannel(bot);
}
