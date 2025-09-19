Got it 🚀
Here’s a **detailed README** draft for your AionBot project, written to be clear for contributors, maintainers, and future users.

---

# 📅 AionBot

AionBot is a **Telegram bot** built with **TypeScript + Node.js** that helps track the **Ethiopian year progress**.
It posts **weekly progress updates** (percentage completed vs remaining) to any channel where it is made an **admin**.

---

## ✨ Features

* 📊 **Weekly Ethiopian Year Progress**

  * Calculates Ethiopian year start/end dates dynamically (Meskerem 1 → Pagumen 5/6).
  * Sends percentage completed & remaining every Sunday.
  * Includes a **futuristic progress bar**.

* 🔗 **Multi-channel Support**

  * Any channel owner can add the bot as admin.
  * Owners can subscribe their channel via `/subscribe @ChannelUsername`.
  * The bot stores subscriptions and posts automatically.

* ⚡ **Scheduler**

  * Uses `node-cron` to send updates at a fixed schedule (default: Sunday 9:00 AM).

---

## 🛠️ Tech Stack

* **Node.js** + **TypeScript**
* [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
* [node-cron](https://github.com/node-cron/node-cron)
* [dotenv](https://github.com/motdotla/dotenv) for environment variables

---

## 📂 Project Structure

```
AionBot/
│── src/
│   ├── bot.ts            # Initializes bot & core commands
│   ├── subscription.ts   # Handles channel subscriptions
│   ├── scheduler.ts      # Weekly progress scheduler
│   ├── handles/
│   │   ├── progress.ts   
│   │   └── subscription.ts  
│   ├── services/
│   │   ├── calendar.ts   # Ethiopian year & progress calculation
│   │   └── progress.ts   # Progress bar generator
│   ├── index.ts          # Entry point
│── channels.json         # Stores subscribed channels
│── .env                  # Environment variables (BOT_TOKEN, etc.)
│── package.json
│── tsconfig.json
│── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/biniam0/AionBot.git
cd AionBot
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
BOT_TOKEN=your-telegram-bot-token
```

### 4. Build and run

```bash
pnpm run build
pnpm run start
```

---

## 📡 Usage

1. Add **AionBot** as **admin** in your Telegram channel.
2. In a private chat with the bot, run:

```text
/subscribe @YourChannelUsername
```

3. Every Sunday, the bot will post Ethiopian year progress to your channel 🎉

---

## 🤝 Contributing

We welcome contributions! Here’s how you can help:

1. **Fork** the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests & lint (`pnpm run build` to ensure code compiles)
5. Commit and push (`git commit -m "feat: add amazing feature"`)
6. Open a **Pull Request**

### Contribution Ideas

* Add `/unsubscribe` and `/listchannels` commands
* Improve progress visualization (graphical charts, emojis, etc.)
* Localization (Amharic, Oromiffa, Tigrigna)
* Unit tests for calendar calculations

---

## 🧭 Roadmap / Coming Soon

* 🤖 **AI-Powered Weekly Summaries**

  * At the end of each week, the bot will generate a **summary of your channel’s activity** for the week using an AI API (e.g., OpenAI or Anthropic).
  * Example: “This week, your channel had 15 new posts, 200 views, and top topics were tech, coding, and summary.”

* 📅 **Custom Schedules**

  * Let channel owners choose when updates are sent (daily, weekly, or monthly).

* 📊 **Interactive Commands**

  * `/progress` → On-demand progress report
  * `/stats` → See how many channels are using the bot
  * and more to come.

---

## 📜 License

MIT License © 2025 [biniam0](https://github.com/biniam0)
