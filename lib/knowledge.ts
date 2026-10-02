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
];

function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function findRelevantKnowledge(query: string, max = 2): KnowledgeEntry[] {
  const q = normalize(query);
  return KNOWLEDGE.map((entry) => ({
    entry,
    score: entry.keywords.filter((k) => q.includes(normalize(k))).length,
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