import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const CHANNELS_FILE = "channels.json";

export function subscribeChannel(bot: TelegramBot) {
  bot.onText(/\/subscribe (.+)/, (msg, match) => {
    if (!match) return;
    const channelUsername = match[1];

    const channels: string[] = fs.existsSync(CHANNELS_FILE)
      ? JSON.parse(fs.readFileSync(CHANNELS_FILE, "utf-8"))
      : [];

    if (!channels.includes(channelUsername)) {
      channels.push(channelUsername);
      fs.writeFileSync(CHANNELS_FILE, JSON.stringify(channels, null, 2));

      bot.sendMessage(
        msg.chat.id,
        `✅ Subscribed to ${channelUsername}\n\n⚠️ Remember: If I don’t respond immediately, it may take ~50s because of free hosting spin-up time.`
      );
    } else {
      bot.sendMessage(msg.chat.id, `${channelUsername} is already subscribed.`);
    }
  });
}
