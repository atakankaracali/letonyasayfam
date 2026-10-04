export interface KnowledgeEntry {
  id: string;
  title: string;
  keywords: string[];
  lastVerified: string;
  content: string;
  sources: string[];
}

export const KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "riga-transport-fares",
    title: "Rīgas Satiksme ticket prices",
    keywords: [
      "bilet", "ticket", "otobus", "tramvay", "troleybus", "ulasim", "transport",
      "satiksme", "e-talon", "etalon", "abonman", "aylik", "monthly", "bilete", "toplu tasima",
    ],
    lastVerified: "",
    content: [
      "- Single 90-minute transfer ticket: 1.50 EUR (old 1.15 EUR fares are obsolete).",
      "- Monthly pass: 30.00 EUR.",
      "- Student monthly pass: 12 EUR (student status required).",
    ].join("\n"),
    sources: ["https://www.rigassatiksme.lv"],
  },
  {
    id: "rtu-kipsala-transit",
    title: "Getting to RTU Ķīpsala campus",
    keywords: ["rtu", "kipsala", "zunda", "teknik universite", "technical university", "kampus", "campus"],
    lastVerified: "",
    content: [
      "- Main stops for RTU Ķīpsala campus: \"Ķīpsala\" and \"Zunda\".",
      "- Routes via Vanšu tilts include trolleybuses 9, 12, 25 and buses 13, 37, 41, 53, 57.",
      "- Bus 49 does NOT run on weekends.",
      "- For exact schedules always use the Rīgas satiksme app, Google Maps or rigassatiksme.lv.",
    ].join("\n"),
    sources: ["https://www.rigassatiksme.lv"],
  },
  {
    id: "residence-permit-general",
    title: "Residence permits (general process)",
    keywords: [
      "oturum", "ikamet", "residence permit", "pmlp", "uzturesanas", "vize", "visa",
      "termin", "permit", "oturma izni", "kart",
    ],
    lastVerified: "",
    content: [
      "- Residence permits in Latvia are handled by PMLP (Office of Citizenship and Migration Affairs).",
      "- Required documents and fees depend on the purpose (study, work, family, business).",
      "- Always check the current document list and fees on pmlp.gov.lv before applying; rules change.",
    ].join("\n"),
    sources: ["https://www.pmlp.gov.lv"],
  },
  {
    id: "renting-general",
    title: "Renting an apartment (ss.lv)",
    keywords: ["kira", "ev", "daire", "apartment", "rent", "ss.lv", "dzivoklis", "depozito", "deposit", "ev sahibi"],
    lastVerified: "",
    content: [
      "- ss.lv is the most widely used listing site.",
      "- Never pay a deposit before seeing the apartment in person and signing a written contract.",
      "- Be cautious with listings far below market price or owners who are 'abroad' and ask for transfers.",
      "- After moving in, residents must declare their place of residence (latvija.gov.lv).",
    ].join("\n"),
    sources: ["https://www.ss.lv", "https://www.latvija.gov.lv"],
  },
  {
  id: "the-sofra",
  title: "The Sofra (restaurant in Riga)",
  keywords: ["sofra", "the sofra", "turk restoran", "turkish restaurant", "turk yemek", "kebap", "doner", "arap restoran"],
  lastVerified: "2026-10-04",
  content: [
    "- The Sofra is a restaurant in Riga serving Turkish and Arabic cuisine, with more emphasis on Arabic dishes. It is popular among the Arabic-speaking community.",
    "- Online reviews are mixed: there are both positive and negative reviews.",
    "- Always suggest the user check recent reviews on Google Maps.",
    "- When the user asks about Turkish restaurants in general, mention The Sofra as one known option AND give the Google Maps search link for other options. Do not present it as the only or the best Turkish restaurant.",
  ].join("\n"),
  sources: ["https://www.google.com/maps/search/?api=1&query=The+Sofra+Riga"],
},
{
  id: "ahh-meat-valmiera",
  title: "Ahh Meat (Turkish Mediterranean restaurant in Valmiera)",
  keywords: ["ahh meat", "valmiera", "turk restoran", "turkish restaurant", "turk yemek", "kebap", "en iyi turk restoran"],
  lastVerified: "2026-10-04",
  content: [
    "- Ahh Meat is a Turkish/Mediterranean restaurant in Valmiera (NOT in Riga).",
    "- Family friendly and most hospitable Turkish/Mediterranean restaurant.",
    "- If the user is asking about Riga, clearly mention that it is in Valmiera, and also give the Google Maps search link for Turkish restaurants in Riga.",
  ].join("\n"),
  sources: ["https://www.google.com/maps/search/?api=1&query=Ahh+Meat+Valmiera"],
},
];

function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function keywordMatches(words: string[], query: string, keyword: string): boolean {
  const k = normalize(keyword);
  if (k.includes(" ") || k.includes(".")) return query.includes(k);
  return words.some((w) => (k.length >= 4 ? w.startsWith(k) : w === k));
}

export function findRelevantKnowledge(query: string, max = 2): KnowledgeEntry[] {
  const q = normalize(query);
  const words = q.split(/[^\p{L}\p{N}.]+/u).filter(Boolean);
  return KNOWLEDGE.map((entry) => ({
    entry,
    score: entry.keywords.filter((k) => keywordMatches(words, q, k)).length,
  }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((x) => x.entry);
}

export function formatKnowledge(entries: KnowledgeEntry[]): string {
  if (entries.length === 0) return "";
  const blocks = entries.map((e) => {
    const verified = e.lastVerified
      ? `last verified: ${e.lastVerified}`
      : "last verified: UNKNOWN - tell the user to double-check the official source";
    return `### ${e.title} (${verified})\n${e.content}\nSources: ${e.sources.join(", ")}`;
  });
  return `\n\n## VERIFIED KNOWLEDGE (Letonya Sayfam database)\n${blocks.join("\n\n")}`;
}