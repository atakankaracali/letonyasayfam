"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  SendOutlined,
  CoffeeOutlined,
  ArrowLeftOutlined,
  RobotOutlined,
  ClearOutlined,
} from "@ant-design/icons";

interface Message {
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
  isLocal?: boolean;
}

const MAX_CHARS = 500;

const ALLOWED_LINK_DOMAINS = [
  "gov.lv",
  "latvija.gov.lv",
  "likumi.lv",
  "csdd.lv",
  "riga.lv",
  "aic.lv",
  "mfa.gov.tr",
  "rigassatiksme.lv",
  "pv.lv",
  "autoosta.lv",
  "atd.lv",
  "riga-airport.com",
  "airbaltic.com",
  "bolt.eu",
  "wolt.com",
  "rtu.lv",
  "lu.lv",
  "rsu.lv",
  "turiba.lv",
  "riseba.lv",
  "cv.lv",
  "ss.lv",
  "city24.lv",
  "linkedin.com",
  "latvia.travel",
  "liveriga.com",
  "pasts.lv",
  "letonyasayfam.com",
  "instagram.com",
  "tiktok.com",
  "youtube.com",
  "revolut.me",
  "google.com",
];

function isAllowedHref(href?: string): boolean {
  if (!href) return false;
  try {
    const url = new URL(href);
    if (url.protocol !== "https:") return false;
    return ALLOWED_LINK_DOMAINS.some(
      (d) => url.hostname === d || url.hostname.endsWith(`.${d}`),
    );
  } catch {
    return false;
  }
}

const WELCOME: Message = {
  role: "assistant",
  isLocal: true,
  content:
    "Sveiki! Hello! Merhaba! 👋\n\nI am **Letonya Sayfam AI**, your digital guide to life in Latvia. Ask me about studying, daily life, transport, documents, restaurants, local services, or anything else about Latvia.\n\nYou can ask in Turkish, English, Latvian, or any language you prefer.",
};

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const pushAssistant = (content: string, isError = false) =>
    setMessages((prev) => [...prev, { role: "assistant", content, isError }]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query || loading) return;

    const userMessage: Message = { role: "user", content: query.slice(0, MAX_CHARS) };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const payload = updatedMessages
      .filter((m) => !m.isError && !m.isLocal)
      .map(({ role, content }) => ({ role, content }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.reply) {
        pushAssistant(data.reply);
      } else {
        pushAssistant(data.error || "An unexpected error occurred. Please try again.", true);
      }
    } catch {
      pushAssistant("Connection error. Please check your network and try again.", true);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: "assistant",
        isLocal: true,
        content: "Chat cleared. Feel free to ask your next question about Latvia!",
      },
    ]);
  };

  const hasConversation = messages.some((m) => m.role === "user");

  return (
    <div className="flex flex-col h-[100dvh] bg-[#f8fafc] overflow-hidden">
      <header className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 bg-white border-b border-black/5 shadow-2xs shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <Link
            href="/home"
            className="p-1.5 -ml-1 rounded-xl text-zinc-500 hover:text-black hover:bg-zinc-100 transition shrink-0"
            aria-label="Back to Home"
          >
            <ArrowLeftOutlined className="text-base" />
          </Link>
          <Image
            src="/logo.jpg"
            alt="Letonya Sayfam"
            width={32}
            height={32}
            className="rounded-full shadow-2xs shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-sm font-black text-black leading-tight truncate">
              Letonya Sayfam <span className="text-[#800000]">AI</span>
            </h1>
            <p className="text-[10px] text-zinc-400 truncate">Latvia Guide & Assistant</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {hasConversation && (
            <button
              onClick={handleClearChat}
              aria-label="Clear chat"
              title="Clear chat"
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 p-2 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-100 transition"
            >
              <ClearOutlined />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
          <a
            href="https://revolut.me/atakaneae4"
            target="_blank"
            rel="noreferrer"
            aria-label="Support Letonya Sayfam AI on Revolut"
            className="flex items-center gap-1 text-xs bg-[#FFA800]/15 text-[#b37400] font-bold p-2 sm:px-2.5 sm:py-1.5 rounded-xl hover:bg-[#FFA800]/25 transition"
          >
            <CoffeeOutlined />
            <span className="hidden sm:inline">Support</span>
          </a>
        </div>
      </header>

      <div className="w-full max-w-2xl mx-auto px-4 pt-3 shrink-0">
        <div className="bg-gradient-to-r from-amber-50/90 to-orange-50/90 border border-amber-200/60 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-lg bg-amber-100 p-1.5 rounded-lg shrink-0">☕</span>
            <div className="truncate">
              <p className="text-xs font-bold text-amber-950 truncate">Letonya Sayfam AI is free</p>
              <p className="text-[10px] text-amber-700 hidden sm:block truncate">
                Support server & AI API costs via Revolut
              </p>
            </div>
          </div>
          <a
            href="https://revolut.me/atakaneae4"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-white text-[#800000] border border-[#800000]/20 font-bold text-[11px] px-3 py-1.5 rounded-lg shadow-2xs transition-all active:scale-95"
          >
            Revolut →
          </a>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 max-w-2xl w-full mx-auto space-y-3">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[88%] md:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-2xs ${
                m.role === "user"
                  ? "bg-[#800000] text-white rounded-br-none"
                  : m.isError
                    ? "bg-red-50 text-red-800 border border-red-200 rounded-bl-none"
                    : "bg-white text-zinc-800 border border-black/5 rounded-bl-none"
              }`}
            >
              {m.role === "user" ? (
                <div className="whitespace-pre-wrap">{m.content}</div>
              ) : (
                <ReactMarkdown
                  components={{
                    a: ({ href, children }) =>
                      isAllowedHref(href) ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#800000] font-semibold underline underline-offset-2 break-words"
                        >
                          {children}
                        </a>
                      ) : (
                        <span className="font-semibold">{children}</span>
                      ),
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    ul: ({ children }) => (
                      <ul className="list-disc pl-4 space-y-1 mb-2 last:mb-0">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-4 space-y-1 mb-2 last:mb-0">{children}</ol>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-zinc-950">{children}</strong>
                    ),
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-black/5 rounded-2xl rounded-bl-none px-4 py-2.5 text-xs text-zinc-400 flex items-center gap-2 shadow-2xs animate-pulse">
              <RobotOutlined className="text-sm text-[#800000]" />
              Letonya Sayfam AI is thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white border-t border-black/5 p-3 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="max-w-2xl mx-auto flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Latvia..."
            maxLength={MAX_CHARS}
            className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-base md:text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-[#800000] focus:bg-white transition"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-[#800000] hover:bg-[#660000] disabled:opacity-40 text-white px-4 rounded-xl flex items-center justify-center transition shrink-0 active:scale-95"
          >
            <SendOutlined className="text-sm" />
          </button>
        </form>
        <p className="text-[10px] text-zinc-400 text-center mt-1.5">
          AI responses are for general guidance. Refer to official PMLP regulations for legal procedures.
        </p>
      </div>
    </div>
  );
}
