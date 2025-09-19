import { bot } from "./config.js";
import { subscribeChannel } from "./handlers/subscription.js";

export function initBot(): void {
  bot.onText(/\/start/, (msg) => {
    const helpMessage = `
👋 Welcome to AionBot!

I will track the **Ethiopian year progress** 📅 and post weekly updates.

✨ Available commands:
- /start → Show this help guide
- /subscribe @username → Subscribe a channel or group, so I can post weekly updates there

⚠️ Note: Since I'm hosted on a free service, I may "sleep" when idle. If I take a while (~50 seconds) to respond, please be patient.
I’m just waking up. 😴
`;

    bot.sendMessage(msg.chat.id, helpMessage, { parse_mode: "Markdown" });
  });

  subscribeChannel(bot);
}
