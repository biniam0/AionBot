import express from "express";
import { initBot } from "./bot.js";
import { setupScheduler } from "./scheduler.js";

const app = express();
const PORT = process.env.PORT || 3000;

initBot();initBot();
setupScheduler();

app.get("/", (req, res) => {
  res.send("🤖 AionBot is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
