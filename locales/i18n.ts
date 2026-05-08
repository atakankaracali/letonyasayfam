export type Locale = "en" | "tr" | "lv";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      social: "Social",
      vision: "Vision",
      services: "Services",
      partners: "Partners",
      contact: "Contact",
    },
    hero: {
      tagline: "Latvia's largest Turkish digital platform.",
    },
    social: {
      sectionLabel: "Social Media",
    },
    vision: {
      badge: "Vision",
      title: "Authority in the Baltic Market",
      subtitle: "The strongest digital bridge built between Latvia and Turkey.",
      badge2: "The #1 Reference Point in the Region",
      cardTitle: "Market Power",
      cardQuote: "We reach 90% of the Baltic Turkish demographic.",
    },
    stats: {
      title: "Mass Reach & Impact",
      monthlyReach: "Monthly Average Reach",
      growthTitle: "Sustainable Growth",
      growthDesc:
        'LetonyaSayfam holds the highest organic reach numbers in Latvia-based content production. Our target audience is not just "followers", they are a loyal "community".',
      growthQuote:
        '"We directly reach 90% of the Turkish demographic in the Baltic market."',
    },
    languages: {
      sectionTitle: "Global Standards: Multilingual Communication",
      items: [
        {
          title: "English",
          desc: "Default communication language for the global business world and international audience.",
        },
        {
          title: "Turkish",
          desc: "The cornerstone of the deep cultural connection with our core audience.",
        },
        {
          title: "Latvian",
          desc: "An integrated and professional bond with local people and institutions.",
        },
      ],
    },
    services: {
      sectionTitle: "Service Portfolio",
      columns: {
        category: "Category",
        detail: "Detail",
        impact: "Impact",
      },
      items: [
        {
          key: "1",
          category: "Digital Ad & Branding",
          detail: "Reels/TikTok production.",
          impact: "Viral",
        },
        {
          key: "2",
          category: "Market Consulting",
          detail: "Latvia market analysis.",
          impact: "Strategy",
        },
        {
          key: "3",
          category: "Event Partnerships",
          detail: "Event promotions.",
          impact: "Physical",
        },
        {
          key: "4",
          category: "Corporate PR",
          detail: "Corporate representation in three languages.",
          impact: "Prestige",
        },
      ],
    },
    partners: {
      sectionLabel: "Trusted Partners",
      sectionTitle: "Companies We Work With",
    },
    contact: {
      title: "Let's Grow Together",
    },
    packages: {
      sectionLabel: "What We Offer",
      sectionTitle: "Our Packages",
      items: [
        {
          title: "Opening & Special Days",
          desc: "Professional video production for grand openings, events, and special occasions. We capture your moment and deliver it to thousands.",
          tags: ["Opening", "Event", "Birthday", "Anniversary"],
        },
        {
          title: "Story Packages",
          desc: "Engaging Instagram Stories crafted to boost visibility and drive direct traffic to your business.",
          tags: ["24h Visibility", "Call to Action", "Instagram"],
        },
        {
          title: "Reels: Instagram Only",
          desc: "High-impact short-form video content optimized for Instagram Reels algorithm.",
          tags: ["Instagram", "Viral", "Short Video"],
        },
        {
          title: "Reels: All 4 Platforms",
          desc: "Maximum reach across Instagram, TikTok, YouTube Shorts and Facebook Reels simultaneously.",
          tags: ["Instagram", "TikTok", "YouTube", "Facebook"],
        },
      ],
    },
    form: {
      sectionLabel: "Work With Us",
      sectionTitle: "Start a Collaboration",
      name: "Full Name",
      company: "Company / Brand",
      email: "Email Address",
      phone: "Phone Number",
      service: "Service Type",
      servicePlaceholder: "Select a service",
      serviceOptions: [
        "Opening & Special Days",
        "Story Package",
        "Reels: Instagram Only",
        "Reels: All 4 Platforms",
        "Other",
      ],
      message: "Your Message",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send Request",
      success: "Your request has been sent! We will get back to you shortly.",
    },
  },

  tr: {
    nav: {
      social: "Sosyal",
      vision: "Vizyon",
      services: "Hizmetler",
      partners: "Ortaklar",
      contact: "İletişim",
    },
    hero: {
      tagline: "Letonya'nın en büyük Türk dijital platformu.",
    },
    social: {
      sectionLabel: "Sosyal Medya",
    },
    vision: {
      badge: "Vizyon",
      title: "Baltık Pazarında Otorite",
      subtitle: "Letonya ve Türkiye arasında kurulan en güçlü dijital köprü.",
      badge2: "Bölgedeki 1 Numaralı Referans Noktası",
      cardTitle: "Pazar Gücü",
      cardQuote: "Baltık Türk demografisinin %90'ına ulaşıyoruz.",
    },
    stats: {
      title: "Kitlesel Erişim ve Etki Gücü",
      monthlyReach: "Aylık Ortalama Erişim",
      growthTitle: "Sürdürülebilir Büyüme",
      growthDesc:
        'LetonyaSayfam, Letonya merkezli içerik üretiminde en yüksek organik erişim rakamlarına sahip platformdur. Hedef kitlemiz sadece "takipçi" değil, sadık bir "topluluktur".',
      growthQuote:
        '"Baltık pazarındaki Türk demografisinin %90\'ına doğrudan ulaşıyoruz."',
    },
    languages: {
      sectionTitle: "Global Standartlar: Çok Dilli İletişim",
      items: [
        {
          title: "İngilizce",
          desc: "Global iş dünyası ve uluslararası kitle için varsayılan iletişim dili.",
        },
        {
          title: "Türkçe",
          desc: "Ana kitlemizle kurulan derin ve kültürel bağın temel taşı.",
        },
        {
          title: "Letonca",
          desc: "Yerel halk ve kurumlarla kurulan entegre ve profesyonel bağ.",
        },
      ],
    },
    services: {
      sectionTitle: "Hizmet Portfolyosu",
      columns: {
        category: "Kategori",
        detail: "Detay",
        impact: "Etki",
      },
      items: [
        {
          key: "1",
          category: "Dijital Reklam & Marka",
          detail: "Reels/TikTok prodüksiyonu.",
          impact: "Viral",
        },
        {
          key: "2",
          category: "Pazar Danışmanlığı",
          detail: "Letonya pazar analizi.",
          impact: "Strateji",
        },
        {
          key: "3",
          category: "Etkinlik Ortaklıkları",
          detail: "Etkinlik tanıtımları.",
          impact: "Fiziksel",
        },
        {
          key: "4",
          category: "Kurumsal PR",
          detail: "Üç dilde kurumsal temsil.",
          impact: "Prestij",
        },
      ],
    },
    partners: {
      sectionLabel: "İş Ortaklarımız",
      sectionTitle: "Birlikte Çalıştığımız Şirketler",
    },
    contact: {
      title: "Birlikte Büyüyelim",
    },
    packages: {
      sectionLabel: "Neler Sunuyoruz",
      sectionTitle: "Paketlerimiz",
      items: [
        {
          title: "Açılış, Etkinlik & Özel Günler",
          desc: "Açılışlar, etkinlikler ve özel günler için profesyonel video prodüksiyonu. Anınızı yakalıyor, binlerce kişiye ulaştırıyoruz.",
          tags: ["Açılış", "Etkinlik", "Doğum Günü", "Yıl Dönümü"],
        },
        {
          title: "Story Paketleri",
          desc: "Görünürlüğünüzü artıran ve işletmenize doğrudan trafik çeken etkileyici Instagram Hikayeleri.",
          tags: ["24s Görünürlük", "Aksiyon Çağrısı", "Instagram"],
        },
        {
          title: "Reels: Sadece Instagram",
          desc: "Instagram Reels algoritmasına özel optimize edilmiş, yüksek etkili kısa video içerikleri.",
          tags: ["Instagram", "Viral", "Kısa Video"],
        },
        {
          title: "Reels: 4 Platform Birden",
          desc: "Instagram, TikTok, YouTube Shorts ve Facebook Reels'de eş zamanlı maksimum erişim.",
          tags: ["Instagram", "TikTok", "YouTube", "Facebook"],
        },
      ],
    },
    form: {
      sectionLabel: "Bizimle Çalışın",
      sectionTitle: "İş Birliği Başlatın",
      name: "Ad Soyad",
      company: "Şirket / Marka",
      email: "E-posta Adresi",
      phone: "Telefon Numarası",
      service: "Hizmet Türü",
      servicePlaceholder: "Hizmet seçin",
      serviceOptions: [
        "Açılış & Özel Günler",
        "Story Paketi",
        "Reels: Sadece Instagram",
        "Reels: 4 Platform Birden",
        "Diğer",
      ],
      message: "Mesajınız",
      messagePlaceholder: "Projeniz hakkında bilgi verin...",
      submit: "Teklif Gönder",
      success: "Talebiniz iletildi! En kısa sürede size dönüş yapacağız.",
    },
  },

  lv: {
    nav: {
      social: "Sociālie tīkli",
      vision: "Vīzija",
      services: "Pakalpojumi",
      partners: "Partneri",
      contact: "Kontakti",
    },
    hero: {
      tagline: "Latvijas lielākā turku kopienas digitālā platforma.",
    },
    social: {
      sectionLabel: "Sociālie tīkli",
    },
    vision: {
      badge: "Vīzija",
      title: "Autoritāte Baltijas tirgū",
      subtitle:
        "Spēcīgākais digitālais tilts starp Latviju un Turciju, izveidots, lai savieno kultūras un veicina biznesa izaugsmi.",
      badge2: "Reģiona Nr. 1 atsauces platforma",
      cardTitle: "Tirgus spēks",
      cardQuote:
        "Mēs sasniedzam 90% Baltijas turku kopienas, tieši un uzticami.",
    },
    stats: {
      title: "Masveida sasniedzamība un reāla ietekme",
      monthlyReach: "Vidējā mēneša sasniedzamība",
      growthTitle: "Ilgtspējīga izaugsme",
      growthDesc:
        "LetonyaSayfam ir platforma ar augstākajiem organiskās sasniedzamības rādītājiem Latvijā veidotā saturā. Mūsu auditorija nav tikai sekotāji, tā ir vienota, lojāla kopiena, kurai uzticaties.",
      growthQuote: '"Mēs tieši sasniedzam 90% turku kopienas Baltijas tirgū."',
    },
    languages: {
      sectionTitle: "Globālie standarti: daudzvalodu komunikācija",
      items: [
        {
          title: "Angļu valoda",
          desc: "Galvenā saziņas valoda starptautiskajai biznesa videi un globālajai auditorijai.",
        },
        {
          title: "Turku valoda",
          desc: "Dziļas kultūras saiknes pamats ar mūsu galveno auditoriju, turku kopienu Baltijā.",
        },
        {
          title: "Latviešu valoda",
          desc: "Profesionāla un integrēta saziņa ar vietējiem iedzīvotājiem, uzņēmumiem un valsts institūcijām.",
        },
      ],
    },
    services: {
      sectionTitle: "Pakalpojumu portfelis",
      columns: {
        category: "Kategorija",
        detail: "Apraksts",
        impact: "Ietekme",
      },
      items: [
        {
          key: "1",
          category: "Digitālā reklāma un zīmols",
          detail: "Reels un TikTok video produkcija.",
          impact: "Vīrāls",
        },
        {
          key: "2",
          category: "Tirgus konsultācijas",
          detail: "Latvijas tirgus izpēte un analīze.",
          impact: "Stratēģija",
        },
        {
          key: "3",
          category: "Pasākumu partnerības",
          detail: "Pasākumu organizēšana un publicitāte.",
          impact: "Klātienē",
        },
        {
          key: "4",
          category: "Korporatīvais PR",
          detail: "Profesionāla pārstāvniecība trīs valodās.",
          impact: "Prestižs",
        },
      ],
    },
    partners: {
      sectionLabel: "Uzticami partneri",
      sectionTitle: "Uzņēmumi, ar kuriem sadarbojamies",
    },
    contact: {
      title: "Augsim kopā",
    },
    packages: {
      sectionLabel: "Ko Mēs Piedāvājam",
      sectionTitle: "Mūsu Pakalpojumu Paketes",
      items: [
        {
          title: "Atklāšana, Pasākumi & Īpašas Dienas",
          desc: "Profesionāla video produkcija atklāšanas ceremonijām, pasākumiem un īpašiem notikumiem. Mēs fiksējam jūsu mirkli un nogādājam to tūkstošiem skatītāju.",
          tags: ["Atklāšana", "Pasākums", "Dzimšanas diena", "Jubileja"],
        },
        {
          title: "Stāstu Paketes",
          desc: "Aizraujoši Instagram stāsti, kas palielina redzamību un novirza tiešo trafiku uz jūsu uzņēmumu.",
          tags: ["24h Redzamība", "Aicinājums uz darbību", "Instagram"],
        },
        {
          title: "Reels: Tikai Instagram",
          desc: "Augstas ietekmes īsformāta video saturs, kas optimizēts Instagram Reels algoritmam.",
          tags: ["Instagram", "Vīrāls", "Īss video"],
        },
        {
          title: "Reels: Visas 4 Platformas",
          desc: "Maksimāla sasniedzamība Instagram, TikTok, YouTube Shorts un Facebook Reels vienlaicīgi.",
          tags: ["Instagram", "TikTok", "YouTube", "Facebook"],
        },
      ],
    },
    form: {
      sectionLabel: "Sadarbojieties ar mums",
      sectionTitle: "Uzsāciet sadarbību",
      name: "Vārds Uzvārds",
      company: "Uzņēmums / Zīmols",
      email: "E-pasta adrese",
      phone: "Tālruņa numurs",
      service: "Pakalpojuma veids",
      servicePlaceholder: "Izvēlieties pakalpojumu",
      serviceOptions: [
        "Atklāšana & Īpašas dienas",
        "Stāstu pakete",
        "Reels: Tikai Instagram",
        "Reels: Visas 4 platformas",
        "Cits",
      ],
      message: "Jūsu ziņojums",
      messagePlaceholder: "Pastāstiet par savu projektu...",
      submit: "Nosūtīt pieprasījumu",
      success:
        "Jūsu pieprasījums ir nosūtīts! Mēs sazināsimies ar jums drīzumā.",
    },
  },
} as const;

export type Translations = typeof translations.en;

export function useTranslations(locale: Locale): Translations {
  return translations[locale] as unknown as Translations;
}
