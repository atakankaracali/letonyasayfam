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
}

const PRESET_QUESTIONS = [
  "What documents are needed for PMLP residence permit?",
  "Key things to watch out for when renting an apartment in Riga?",
  "How many hours can international students work in Latvia?",
  "How to avoid scams on SS.lv?",
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Sveiki! Hello! Merhaba! 👋\n\nI am **Letonya Sayfam AI**, your guide to living, studying, and handling bureaucracy in Latvia. Feel free to ask your questions in English, Turkish, Latvian, or any language you prefer!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMessage: Message = { role: "user", content: query };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.error || "An unexpected error occurred. Please try again.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection error. Please check your network and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Chat cleared. Feel free to ask your next question about Latvia!",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8fafc]">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-black/5 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/home"
            className="p-2 rounded-xl text-zinc-500 hover:text-black hover:bg-zinc-100 transition"
            title="Back to Home"
          >
            <ArrowLeftOutlined className="text-lg" />
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Letonya Sayfam"
              width={36}
              height={36}
              className="rounded-full shadow"
            />
            <div>
              <h1 className="text-base font-black text-black leading-tight flex items-center gap-1.5">
                Letonya Sayfam <span className="text-[#800000]">AI</span>
              </h1>
              <p className="text-[11px] text-zinc-400">
                Latvia Guide & Digital Assistant
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {messages.length > 2 && (
            <button
              onClick={handleClearChat}
              className="text-xs text-zinc-400 hover:text-zinc-600 px-2 py-1.5 rounded-lg hover:bg-zinc-100 transition flex items-center gap-1"
            >
              <ClearOutlined /> Clear
            </button>
          )}
          <a
            href="https://revolut.me/atakaneae4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs bg-[#FFA800]/15 text-[#b37400] font-bold px-3 py-2 rounded-xl hover:bg-[#FFA800]/25 transition"
          >
            <CoffeeOutlined />
            <span>Support</span>
          </a>
        </div>
      </header>

      {/* Revolut Support Card */}
      <div className="max-w-3xl w-full mx-auto px-4 pt-3">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-2xl bg-amber-100 p-2 rounded-xl flex-shrink-0">☕</span>
            <div>
              <p className="text-xs font-bold text-amber-900">
                Letonya Sayfam AI is free & community-supported
              </p>
              <p className="text-[11px] text-amber-700">
                You can support our server and AI API expenses with a coffee via Revolut.
              </p>
            </div>
          </div>
          <a
            href="https://revolut.me/atakaneae4"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 bg-[#0075eb] hover:bg-[#0060c2] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all hover:scale-105"
          >
            Support on Revolut →
          </a>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 max-w-3xl w-full mx-auto space-y-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm ${
                m.role === "user"
                  ? "bg-[#800000] text-white rounded-br-none"
                  : "bg-white text-zinc-800 border border-black/5 rounded-bl-none"
              }`}
            >
              {m.role === "user" ? (
                <div className="whitespace-pre-wrap">{m.content}</div>
              ) : (
                <ReactMarkdown
                  components={{
                    a: ({ ...props }) => (
                      <a
                        {...props}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline font-semibold hover:text-blue-800"
                      />
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
            <div className="bg-white border border-black/5 rounded-2xl rounded-bl-none px-5 py-3 text-xs text-zinc-400 flex items-center gap-2 shadow-sm animate-pulse">
              <RobotOutlined className="text-sm text-[#800000]" />
              Letonya Sayfam AI is thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Preset Question Pills */}
      {messages.length === 1 && (
        <div className="max-w-3xl w-full mx-auto px-4 pb-3 flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-xs bg-white hover:bg-zinc-100 text-zinc-600 border border-black/5 rounded-xl px-3 py-2 transition text-left shadow-2xs"
            >
              💡 {q}
            </button>
          ))}
        </div>
      )}

      {/* Message Input Box */}
      <div className="bg-white border-t border-black/5 p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="max-w-3xl mx-auto flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Latvia... (e.g. TR / EN / LV)"
            maxLength={500}
            className="flex-1 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-3.5 text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-[#800000] focus:bg-white transition"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-[#800000] hover:bg-[#660000] disabled:opacity-40 text-white px-5 rounded-2xl flex items-center justify-center transition"
          >
            <SendOutlined className="text-base" />
          </button>
        </form>
        <p className="text-[10px] text-zinc-400 text-center mt-2">
          AI responses are for general guidance only. Always refer to official PMLP regulations for legal procedures.
        </p>
      </div>
    </div>
  );
}