"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "antd";
import { type useTranslations } from "../../locales/i18n";

const { Title } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-black font-medium text-sm focus:outline-none focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/10 transition-all placeholder:text-zinc-400";

export default function CollaborationForm({
  t,
}: {
  t: ReturnType<typeof useTranslations>["form"];
}) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Ad Soyad": form.name,
          Şirket: form.company,
          Email: form.email,
          Telefon: form.phone,
          Hizmet: form.service,
          Mesaj: form.message,
        }),
      });
      if (response.ok) {
        setSent(true);
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      id="form"
    >
      <div className="text-center mb-16">
        <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 mb-3">
          {t.sectionLabel}
        </p>
        <Title level={2} className="!text-black !mb-0">
          {t.sectionTitle}
        </Title>
      </div>

      <div className="bg-white border border-black/5 rounded-[3rem] p-10 md:p-16 shadow-sm max-w-3xl mx-auto">
        {sent ? (
          <div className="text-center py-16">
            <span className="text-6xl mb-6 block">✅</span>
            <p className="text-xl font-black text-black">{t.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                  {t.name}
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={INPUT_CLASS}
                  placeholder="Name Surname"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                  {t.company}
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className={INPUT_CLASS}
                  placeholder="Company Name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                  {t.email}
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={INPUT_CLASS}
                  placeholder="hello@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                  {t.phone}
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={INPUT_CLASS}
                  placeholder="+371 00 000 000"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                {t.service}
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={INPUT_CLASS}
              >
                <option value="" disabled>
                  {t.servicePlaceholder}
                </option>
                {t.serviceOptions.map((opt) => {
                  return (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                {t.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className={INPUT_CLASS}
                placeholder={t.messagePlaceholder}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-bold text-center">
                Bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#800000] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-[#600000] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "..." : t.submit}
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
}
