import dotenv from "dotenv";
dotenv.config();

export const BOT_TOKEN: string = process.env.BOT_TOKEN || "";
export const CHAT_ID: string = process.env.CHAT_ID || "";
