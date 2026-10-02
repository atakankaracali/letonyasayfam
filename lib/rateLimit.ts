import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 30;

const upstash =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(MAX_REQUESTS, "15 m"),
        prefix: "lsai",
      })
    : null;

const memory = new Map<string, { count: number; resetTime: number }>();

function memoryLimit(key: string): boolean {
  const now = Date.now();

  if (memory.size > 5000) {
    for (const [k, v] of memory) if (now > v.resetTime) memory.delete(k);
  }

  const record = memory.get(key);
  if (!record || now > record.resetTime) {
    memory.set(key, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }
  if (record.count >= MAX_REQUESTS) return false;
  record.count += 1;
  return true;
}

export async function checkRateLimit(key: string): Promise<boolean> {
  if (upstash) {
    try {
      const { success } = await upstash.limit(key);
      return success;
    } catch (err) {
      console.error("[RateLimit] Upstash error, falling back to memory:", err);
    }
  }
  return memoryLimit(key);
}

export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}