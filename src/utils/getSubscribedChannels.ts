import fs from "fs";

const CHANNELS_FILE = "channels.json";

export function getSubscribedChannels(): string[] {
  return fs.existsSync(CHANNELS_FILE)
    ? JSON.parse(fs.readFileSync(CHANNELS_FILE, "utf-8"))
    : [];
}