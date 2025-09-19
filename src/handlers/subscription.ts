import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const CHANNELS_FILE = "channels.json";

export function subscribeChannel(bot: TelegramBot) {
  bot.onText(/\/subscribe (.+)/, (msg, match) => {
    if (!match) return;
    const chatId = match[1];

    const channels: string[] = fs.existsSync(CHANNELS_FILE)
      ? JSON.parse(fs.readFileSync(CHANNELS_FILE, "utf-8"))
      : [];

    if (!channels.includes(chatId)) {
      channels.push(chatId);
      fs.writeFileSync(CHANNELS_FILE, JSON.stringify(channels, null, 2));
      bot.sendMessage(msg.chat.id, `✅ Subscribed to ${chatId}`);
    } else {
      bot.sendMessage(msg.chat.id, `${chatId} is already subscribed.`);
    }
  });
}
