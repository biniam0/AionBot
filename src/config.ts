import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const BOT_TOKEN: string = process.env.BOT_TOKEN || "";

export const bot = new TelegramBot(BOT_TOKEN, { polling: true });
