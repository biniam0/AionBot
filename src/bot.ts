import TelegramBot from "node-telegram-bot-api";
import { BOT_TOKEN } from "./config.js";

export const bot = new TelegramBot(BOT_TOKEN, { polling: true });

export function initBot(): void {
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "👋 Welcome to AionBot!");
  });

  bot.onText(/\/progress/, (msg) => {
    bot.sendMessage(msg.chat.id, "Checking progress...");
  });
}
