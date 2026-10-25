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

export function scrub(text: string): string {
  if (!text) return text;
  return text
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, "[e-posta]")
    .replace(/\b\d{6}-?\d{5}\b/g, "[kişisel kod]")
    .replace(/\b[A-Z]{2}\d{2}[A-Z0-9]{11,30}\b/g, "[IBAN]")
    .replace(/\+?\d[\d\s().-]{7,}\d/g, "[telefon]");
}

export async function logChat(entry: ChatLogEntry): Promise<void> {
  if (!redis) return;
  const safe: ChatLogEntry = {
    ...entry,
    question: scrub(entry.question),
    previousQuestion: scrub(entry.previousQuestion),
    answer: scrub(entry.answer),
  };
  try {
    await redis
      .pipeline()
      .lpush(LOG_KEY, JSON.stringify(safe))
      .ltrim(LOG_KEY, 0, MAX_LOG_ENTRIES - 1)
      .exec();
  } catch (err) {
    console.error("[ChatLog] Failed to save log:", err);
  }
}