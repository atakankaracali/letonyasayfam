export const MAX_USER_CHARS = 500;

export function sanitizeInput(text: unknown): string {
  if (typeof text !== "string" || !text) return "";
  return text
    .normalize("NFKC")
    .replace(/[\p{Cf}]/gu, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[^\S\n]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export const forbiddenPatterns: RegExp[] = [
  /ignore\s+(all\s+)?(previous|prior|above|system)\s+(instructions|prompts?|rules)/i,
  /disregard\s+(all\s+)?(previous|prior|above)\s+(instructions|rules)/i,
  /forget\s+(all\s+)?(previous|prior)\s+instructions/i,
  /bypass\s+(all\s+)?(filters?|safety|restrictions)/i,
  /\b(dan|jailbreak(en)?)\s*mode\b/i,
  /\bact\s+as\s+(an?\s+)?(unrestricted|jailbroken|dan)\b/i,
  /\b(enter|enable|activate|switch\s+to)\s+(dev(eloper)?|debug|god)\s*mode\b/i,
  /\b(show|reveal|print|repeat)\s+(me\s+)?(your\s+)?(system\s*prompt|hidden\s*instructions)\b/i,

  /([oö]nceki|t[uü]m|b[uü]t[uü]n)\s+(talimatlar[ıi]n?[ıi]?|komutlar[ıi]n?[ıi]?|prompt\w*)\s+(unut|yoksay|g[oö]rmezden\s+gel)/i,
  /(sistem\s*prompt\w*|gizli\s*talimat\w*)\s+(g[oö]ster|yazd[ıi]r|payla[sş]|listele)/i,
  /(geli[sş]tirici|y[oö]netici)\s*mod\w*\s*(ge[cç]|a[cç]|etkinle[sş]tir)/i,

  /<\s*\/?\s*system\s*>/i,
  /\[\s*system\s*(message|instruction)?\s*\]/i,
  /^\s*(system|developer)\s*:/im,
];

export function hasAdvancedInjection(text: string): boolean {
  if (!text) return false;
  const clean = sanitizeInput(text);
  return forbiddenPatterns.some((p) => p.test(clean));
}

export function isTooLong(text: string, max = MAX_USER_CHARS): boolean {
  return sanitizeInput(text).length > max;
}