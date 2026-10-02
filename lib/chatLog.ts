import { Redis } from "@upstash/redis";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

const LOG_KEY = "lsai:log";
const MAX_LOG_ENTRIES = 5000;

export interface ChatLogEntry {
  id: string;
  ts: string;
  question: string;
  previousQuestion: string;
  answer: string;
  knowledge: string[];
  routeGuard: boolean;
  model: string;
}

export async function logChat(entry: ChatLogEntry): Promise<void> {
  if (!redis) return;
  try {
    await redis
      .pipeline()
      .lpush(LOG_KEY, JSON.stringify(entry))
      .ltrim(LOG_KEY, 0, MAX_LOG_ENTRIES - 1)
      .exec();
  } catch (err) {
    console.error("[ChatLog] Failed to save log:", err);
  }
}