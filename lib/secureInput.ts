export function sanitizeInput(text: string): string {
  if (!text || typeof text !== "string") return "";
  return text
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\uFEFF\u2060-\u206F]/g, "")
    .replace(/[\p{Cf}]/gu, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export const forbiddenPatterns = [
  /ignore\s+(all\s+)?(previous|prior|above|system)\s+(instructions|prompts?|rules)/i,
  /forget\s+(about\s+)?(everything|all|the\s+above|previous\s+instructions)/i,
  /disregard\s+(all\s+)?(previous|prior|above)\s+(instructions|rules)/i,
  /overwrite\s+(all\s+)?(instructions|rules|system)/i,
  /bypass\s+(all\s+)?(filters?|safety|rules|restrictions)/i,
  /(t[uü]m|b[uü]t[uü]n)\s*(kurallar[ıi]|talimatlar[ıi])\s*(unut|[cç][ıi]kar|yoksay)/i,

  /\b(dan|jailbreak(en)?)\s*mode\b/i,
  /\bact\s+as\s+(an?\s+)?(unrestricted|jailbroken|evil|dan)\b/i,
  /\bpretend\s+to\s+be\s+(unrestricted|jailbroken|without\s+rules)\b/i,
  /as\s+an\s+ai\s+language\s+model,\s*you\s+can\s+now/i,

  /\b(enter|enable|activate|switch\s+to)\s+(dev(eloper)?|debug|god|maintenance)\s*mode\b/i,
  /\b(geli[sş]tirici|hata\s*ay[ıi]klama|y[oö]netici)\s*moduna?\s*(ge[cç]|a[cç]|etkinle[sş]tir)\b/i,
  /\b(sudo|su)\s+(-[a-z]+\s+)?(su|root|admin|override)\b/i,
  /\b(gain|escalate|grant)\s+(admin|root|system)\s*(access|privileges?|rights?)\b/i,

  /\b(show|reveal|display|output|print|repeat)\s+(your\s+)?(system\s*prompt|hidden\s*rules|initial\s*instructions)\b/i,
  /\b(t[uü]m|b[uü]t[uü]n)\s*(gizli\s*)?(kurallar[ıi]|talimatlar[ıi]|promptu)\s*(g[oö]ster|yazd[ıi]r|a[cç][ıi]kla|listele)\b/i,

  /<\s*\/?\s*system\s*>/i,
  /\[\s*system\s*(message|instruction)?\s*\]/i,
  /^\s*(system|assistant|developer)\s*:/im,
];

export function hasAdvancedInjection(text: string): boolean {
  if (!text) return false;
  const clean = sanitizeInput(text);
  return forbiddenPatterns.some((pattern) => pattern.test(clean));
}

export function isTooLong(text: string, max = 500): boolean {
  return sanitizeInput(text).length > max;
}