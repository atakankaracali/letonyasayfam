export type Locale = "en" | "tr" | "lv";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      social: "Social",
      vision: "About Us",
      services: "Services",
      partners: "Partners",
      contact: "Contact",
    },
    hero: {
      tagline: "Connecting Latvia with the Turkish-Speaking Community.",
    },
    social: {
      sectionLabel: "Social Media",
    },
    vision: {
      badge: "About Us",
      title: "More Than a Social Media Page",
      subtitle:
        "We connect local businesses, students, families and the Turkish-speaking community living in Latvia.",

      description:
        "Letonya Sayfam is a Latvia-based page built around the Turkish-speaking community. We share everyday life, restaurants, places to visit, student life and useful information about Latvia, while helping local businesses reach a community that is growing every day. Our audience includes people from Turkey, Azerbaijan, Uzbekistan, Kazakhstan and other countries, as well as students and families who are new to Latvia. What started as a social media page has grown into a place where people come to discover Latvia, ask questions and find useful local recommendations.",

      badge2: "A Growing Digital Community",
      cardTitle: "Our Community",
      cardQuote:
        "People come to us not only to watch content, but also to discover where to eat, what to do and how to experience life in Latvia.",
    },
    stats: {
      title: "A Growing Community With Real Reach",
      description:
        "Letonya Sayfam and AKA in Europe are digital media platforms connecting local businesses with a growing Turkish-speaking community living, studying and exploring Latvia.",
      items: [
        {
          value: "6K+",
          title: "Instagram Followers",
        },
        {
          value: "365K+",
          title: "Monthly Instagram Views",
        },
        {
          value: "8.5K+",
          title: "Followers Across Platforms",
        },
        {
          value: "4",
          title: "Active Platforms",
        },
      ],
      communityText:
        "Our audience includes Turkish-speaking residents, students and families from Turkey, Azerbaijan, Uzbekistan, Kazakhstan and other countries. New students and their families also turn to us for recommendations about restaurants, local life and experiences in Latvia.",
    },
    languages: {
      sectionTitle: "One Community, Multiple Languages",
      items: [
        {
          title: "Turkish",
          desc: "Our primary content language and the main connection with our community.",
        },
        {
          title: "English",
          desc: "For international students, businesses and partners in Latvia.",
        },
        {
          title: "Latvian",
          desc: "Helping us connect with local businesses, institutions and the wider Latvian community.",
        },
      ],
    },
    services: {
      sectionTitle: "What We Do",
      columns: {
        category: "Service",
        detail: "What We Provide",
        impact: "Purpose",
      },
      items: [
        {
          key: "1",
          category: "Media & Promotion",
          detail:
            "Short-form video production and promotion across Instagram, TikTok, YouTube and Facebook.",
          impact: "Reach",
        },
        {
          key: "2",
          category: "Website & Digital",
          detail:
            "Website design, development, deployment and ongoing digital support.",
          impact: "Digital",
        },
        {
          key: "3",
          category: "Student & Family Support",
          detail:
            "Airport pickup, city tours and practical support for newcomers to Latvia.",
          impact: "Welcome",
        },
        {
          key: "4",
          category: "Local Experiences",
          detail:
            "Restaurant, café, activity and local experience discovery for our community.",
          impact: "Discovery",
        },
        {
          key: "5",
          category: "Business Partnerships",
          detail:
            "Content campaigns and collaborations connecting local businesses with our community.",
          impact: "Growth",
        },
      ],
    },
    partners: {
      sectionLabel: "Trusted Partners",
      sectionTitle: "Companies We Work With",
    },
    contact: {
      title: "Let's Grow Together",
      coffeeText: "Enjoyed our content? Buy us a coffee ☕",
      coffeeButton: "Buy Me a Coffee",
    },
    packages: {
      sectionLabel: "What We Offer",
      sectionTitle: "Our Packages",
      note: "All prices are in EUR. Custom projects are available on request.",
      items: [
        {
          title: "Reel: All 4 Platforms",
          desc: "Professional short-form video published across Instagram, TikTok, YouTube Shorts and Facebook Reels.",
          tags: ["Instagram", "TikTok", "YouTube", "Facebook"],
        },
        {
          title: "Reel: Single Platform",
          desc: "Professional short-form video content published on one platform of your choice.",
          tags: ["1 Platform", "Short Video", "Promotion"],
        },
        {
          title: "Story Package: 3 Stories",
          desc: "Three Instagram Stories designed to increase visibility and drive direct attention to your business.",
          tags: ["3 Stories", "Instagram", "Promotion"],
        },
        {
          title: "Single Story",
          desc: "One Instagram Story for quick visibility and direct promotion.",
          tags: ["1 Story", "Instagram"],
        },
        {
          title: "YouTube Long Video",
          desc: "In-depth YouTube content production for detailed business, restaurant or location features.",
          tags: ["YouTube", "Long Form", "In-Depth"],
        },
        {
          title: "Special Trip / Repeated Coverage",
          desc: "Multi-visit content production for ongoing projects, trips or recurring features.",
          tags: ["Multi-Visit", "Custom", "Extended Coverage"],
        },
        {
          title: "Opening & Special Days",
          desc: "Professional video production for grand openings, events and special occasions.",
          tags: ["Opening", "Event", "Special Day"],
        },
        {
          title: "Same-Day Video Delivery",
          desc: "Add-on for urgent same-day content delivery on any package.",
          tags: ["Add-On", "Urgent", "Same Day"],
        },
      ],
      customNote: "Other custom projects are available on request.",
      websiteNote: "Website Design: includes 1 year of domain and support",
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
        "Reel: All 4 Platforms",
        "Reel: Single Platform",
        "Story Package: 3 Stories",
        "Single Story",
        "YouTube Long Video",
        "Special Trip / Repeated Coverage",
        "Opening & Special Days",
        "Same-Day Video Delivery",
        "Website Design",
        "Airport Pickup / City Tour",
        "Student & Family Support",
        "Other / Custom",
      ],
      message: "Your Message",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send Request",
      success: "Your request has been sent! We will get back to you shortly.",
    },
  },

  tr: {
    nav: {
      social: "Sosyal Medya",
      vision: "Hakkımızda",
      services: "Hizmetler",
      partners: "İş Ortakları",
      contact: "İletişim",
    },
    hero: {
      tagline: "Letonya'yı Türkçe Konuşan Toplulukla Buluşturuyoruz.",
    },
    social: {
      sectionLabel: "Sosyal Medya",
    },
    vision: {
      badge: "Hakkımızda",
      title: "Bir Sosyal Medya Sayfasından Daha Fazlası",
      subtitle:
        "Yerel işletmeleri, öğrencileri, aileleri ve Letonya'da yaşayan Türkçe konuşan topluluğu birbirine bağlıyoruz.",

      description:
        "Letonya Sayfam, Letonya'daki Türkçe konuşan topluluk için oluşturulmuş bir sayfadır. Letonya'daki günlük yaşamı, restoranları, gezilecek yerleri, öğrenci hayatını ve faydalı bilgileri paylaşırken, yerel işletmelerin de büyüyen bu topluluğa ulaşmasına yardımcı oluyoruz. Kitlemiz Türkiye'nin yanı sıra Azerbaycan, Özbekistan, Kazakistan ve diğer ülkelerden gelen Türkçe konuşan kişilerden, öğrencilerden ve Letonya'ya yeni gelen ailelerden oluşuyor. Bir sosyal medya sayfası olarak başlayan Letonya Sayfam, bugün insanların Letonya'yı keşfetmek, soru sormak ve yerel öneriler bulmak için başvurduğu bir topluluğa dönüştü.",

      badge2: "Büyüyen Bir Dijital Topluluk",
      cardTitle: "Topluluğumuz",
      cardQuote:
        "İnsanlar bize yalnızca içerik izlemek için değil, nerede yemek yiyeceklerini, ne yapabileceklerini ve Letonya'da hayatı nasıl keşfedebileceklerini öğrenmek için de geliyor.",
    },
    stats: {
      title: "Büyüyen Bir Topluluk, Gerçek Erişim",
      description:
        "Letonya Sayfam ve AKA in Europe, Letonya'da yaşayan, eğitim gören ve ülkeyi keşfeden Türkçe konuşan topluluk ile yerel işletmeleri buluşturan dijital medya platformlarıdır.",
      items: [
        {
          value: "6K+",
          title: "Instagram Takipçisi",
        },
        {
          value: "365K+",
          title: "Aylık Instagram Görüntülenmesi",
        },
        {
          value: "8.5K+",
          title: "Platformlar Genelinde Takipçi",
        },
        {
          value: "4",
          title: "Aktif Platform",
        },
      ],
      communityText:
        "Kitlemiz; Türkiye, Azerbaycan, Özbekistan, Kazakistan ve diğer ülkelerden Letonya'da yaşayan Türkçe konuşan kişiler, öğrenciler ve ailelerden oluşmaktadır. Yeni gelen öğrenciler ve velileri, restoranlar, şehir yaşamı ve yerel deneyimler hakkında öneriler almak için de bize ulaşmaktadır.",
    },
    languages: {
      sectionTitle: "Tek Topluluk, Birden Fazla Dil",
      items: [
        {
          title: "Türkçe",
          desc: "Ana içerik dilimiz ve topluluğumuzla kurduğumuz temel iletişim.",
        },
        {
          title: "İngilizce",
          desc: "Letonya'daki uluslararası öğrenciler, işletmeler ve iş ortaklarımız için.",
        },
        {
          title: "Letonca",
          desc: "Yerel işletmeler, kurumlar ve Letonya'daki daha geniş kitleyle iletişim kurmak için.",
        },
      ],
    },
    services: {
      sectionTitle: "Neler Yapıyoruz?",
      columns: {
        category: "Hizmet",
        detail: "Sunduğumuz Hizmet",
        impact: "Amaç",
      },
      items: [
        {
          key: "1",
          category: "Medya & Tanıtım",
          detail:
            "Instagram, TikTok, YouTube ve Facebook için kısa video prodüksiyonu ve tanıtım.",
          impact: "Erişim",
        },
        {
          key: "2",
          category: "Web & Dijital",
          detail:
            "Web sitesi tasarımı, geliştirme, yayına alma ve dijital destek.",
          impact: "Dijital",
        },
        {
          key: "3",
          category: "Öğrenci & Aile Desteği",
          detail:
            "Letonya'ya yeni gelenler için havaalanı karşılama, şehir turu ve pratik destek.",
          impact: "Karşılama",
        },
        {
          key: "4",
          category: "Yerel Deneyimler",
          detail:
            "Topluluğumuz için restoran, kafe, aktivite ve yerel deneyim keşifleri.",
          impact: "Keşif",
        },
        {
          key: "5",
          category: "İş Ortaklıkları",
          detail:
            "Yerel işletmeleri topluluğumuzla buluşturan içerik kampanyaları ve iş birlikleri.",
          impact: "Büyüme",
        },
      ],
    },
    partners: {
      sectionLabel: "Güvenilir İş Ortakları",
      sectionTitle: "Birlikte Çalıştığımız Şirketler",
    },
    contact: {
      title: "Birlikte Büyüyelim",
      coffeeText: "İçeriklerimizi beğendiyseniz bize bir kahve ısmarlayın ☕",
      coffeeButton: "Bir Kahve Ismarla",
    },
    packages: {
      sectionLabel: "Neler Sunuyoruz",
      sectionTitle: "Paketlerimiz",
      note: "Tüm fiyatlar EUR'dur. Özel projeler talep üzerine hazırlanır.",
      items: [
        {
          title: "Reel: 4 Platform Birden",
          desc: "Instagram, TikTok, YouTube Shorts ve Facebook Reels'de yayınlanan profesyonel kısa video içeriği.",
          tags: ["Instagram", "TikTok", "YouTube", "Facebook"],
        },
        {
          title: "Reel: Tek Platform",
          desc: "Seçtiğiniz tek platform için profesyonel kısa video içeriği ve tanıtım.",
          tags: ["1 Platform", "Kısa Video", "Tanıtım"],
        },
        {
          title: "Story Paketi: 3 Story",
          desc: "Görünürlüğünüzü artırmak ve işletmenize doğrudan ilgi çekmek için 3 Instagram Story.",
          tags: ["3 Story", "Instagram", "Tanıtım"],
        },
        {
          title: "Tek Story",
          desc: "Hızlı görünürlük ve doğrudan tanıtım için tek bir Instagram Story.",
          tags: ["1 Story", "Instagram"],
        },
        {
          title: "YouTube Uzun Video",
          desc: "İşletme, restoran veya mekan tanıtımları için detaylı YouTube içerik prodüksiyonu.",
          tags: ["YouTube", "Uzun Video", "Detaylı"],
        },
        {
          title: "Özel Gezi / Tekrarlı Çekim",
          desc: "Süregelen projeler, geziler veya tekrarlı içerikler için çok ziyaretli prodüksiyon.",
          tags: ["Çoklu Ziyaret", "Özel", "Genişletilmiş"],
        },
        {
          title: "Açılış & Özel Günler",
          desc: "Açılışlar, etkinlikler ve özel günler için profesyonel video prodüksiyonu.",
          tags: ["Açılış", "Etkinlik", "Özel Gün"],
        },
        {
          title: "Aynı Gün Video Teslimi",
          desc: "Herhangi bir pakete acil aynı gün video teslimi eklenebilir.",
          tags: ["Ek Hizmet", "Acil", "Aynı Gün"],
        },
      ],
      customNote: "Diğer özel projeler için fiyat talep üzerine belirlenir.",
      websiteNote: "Web Sitesi: 1 yıllık domain ve destek dahil",
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
        "Reel: 4 Platform Birden",
        "Reel: Tek Platform",
        "Story Paketi: 3 Story",
        "Tek Story",
        "YouTube Uzun Video",
        "Özel Gezi / Tekrarlı Çekim",
        "Açılış & Özel Günler",
        "Aynı Gün Video Teslimi",
        "Web Sitesi Tasarımı",
        "Havaalanı Karşılama / Şehir Turu",
        "Öğrenci & Aile Desteği",
        "Diğer / Özel",
      ],
      message: "Mesajınız",
      messagePlaceholder: "Projeniz hakkında bize bilgi verin...",
      submit: "Talep Gönder",
      success: "Talebiniz iletildi! En kısa sürede size dönüş yapacağız.",
    },
  },

  lv: {
    nav: {
      social: "Sociālie tīkli",
      vision: "Par mums",
      services: "Pakalpojumi",
      partners: "Partneri",
      contact: "Kontakti",
    },
    hero: {
      tagline: "Savienojam Latviju ar turku valodā runājošo kopienu.",
    },
    social: {
      sectionLabel: "Sociālie tīkli",
    },
    vision: {
      badge: "Par mums",
      title: "Vairāk nekā tikai sociālo tīklu lapa",
      subtitle:
        "Mēs savienojam vietējos uzņēmumus, studentus, ģimenes un Latvijā dzīvojošo turku valodā runājošo kopienu.",

      description:
        "Letonya Sayfam ir Latvijā izveidota lapa turku valodā runājošajai kopienai. Mēs dalāmies ar informāciju par ikdienas dzīvi Latvijā, restorāniem, vietām, ko apmeklēt, studentu dzīvi un noderīgiem padomiem, kā arī palīdzam vietējiem uzņēmumiem sasniegt augošu kopienu. Mūsu auditorijā ir cilvēki no Turcijas, Azerbaidžānas, Uzbekistānas, Kazahstānas un citām valstīm, kā arī studenti un ģimenes, kas ir nesen ieradušies Latvijā. Tas, kas sākās kā sociālo tīklu lapa, ir kļuvis par vietu, kur cilvēki iepazīst Latviju, uzdod jautājumus un meklē noderīgus vietējos ieteikumus.",

      badge2: "Augoša digitālā kopiena",
      cardTitle: "Mūsu kopiena",
      cardQuote:
        "Cilvēki pie mums nāk ne tikai skatīties saturu, bet arī uzzināt, kur paēst, ko darīt un kā iepazīt dzīvi Latvijā.",
    },
    stats: {
      title: "Augoša kopiena ar reālu sasniedzamību",
      description:
        "Letonya Sayfam un AKA in Europe ir digitālās mediju platformas, kas savieno vietējos uzņēmumus ar augošu turku valodā runājošu kopienu, kas dzīvo, studē un iepazīst Latviju.",
      items: [
        {
          value: "6K+",
          title: "Instagram sekotāju",
        },
        {
          value: "365K+",
          title: "Instagram skatījumu mēnesī",
        },
        {
          value: "8.5K+",
          title: "Sekotāju visās platformās",
        },
        {
          value: "4",
          title: "Aktīvas platformas",
        },
      ],
      communityText:
        "Mūsu auditorijā ir turku valodā runājoši iedzīvotāji, studenti un ģimenes no Turcijas, Azerbaidžānas, Uzbekistānas, Kazahstānas un citām valstīm. Jaunie studenti un viņu ģimenes arī vēršas pie mums pēc ieteikumiem par restorāniem, vietējo dzīvi un pieredzi Latvijā.",
    },
    languages: {
      sectionTitle: "Viena kopiena, vairākas valodas",
      items: [
        {
          title: "Turku valoda",
          desc: "Mūsu galvenā satura valoda un galvenais saziņas veids ar mūsu kopienu.",
        },
        {
          title: "Angļu valoda",
          desc: "Starptautiskajiem studentiem, uzņēmumiem un partneriem Latvijā.",
        },
        {
          title: "Latviešu valoda",
          desc: "Lai veidotu saikni ar vietējiem uzņēmumiem, iestādēm un plašāku Latvijas sabiedrību.",
        },
      ],
    },
    services: {
      sectionTitle: "Ko mēs darām",
      columns: {
        category: "Pakalpojums",
        detail: "Ko mēs piedāvājam",
        impact: "Mērķis",
      },
      items: [
        {
          key: "1",
          category: "Mediji un reklāma",
          detail:
            "Īsformāta video veidošana un reklāma Instagram, TikTok, YouTube un Facebook platformās.",
          impact: "Sasniedzamība",
        },
        {
          key: "2",
          category: "Mājaslapas un digitālie risinājumi",
          detail:
            "Mājaslapu dizains, izstrāde, publicēšana un digitālais atbalsts.",
          impact: "Digitālais",
        },
        {
          key: "3",
          category: "Studentu un ģimeņu atbalsts",
          detail:
            "Sagaidīšana lidostā, pilsētas ekskursijas un praktisks atbalsts jaunpienācējiem Latvijā.",
          impact: "Atbalsts",
        },
        {
          key: "4",
          category: "Vietējā pieredze",
          detail:
            "Restorānu, kafejnīcu, aktivitāšu un vietējo pieredžu atklāšana mūsu kopienai.",
          impact: "Atklāšana",
        },
        {
          key: "5",
          category: "Biznesa partnerības",
          detail:
            "Satura kampaņas un sadarbības, kas savieno vietējos uzņēmumus ar mūsu kopienu.",
          impact: "Izaugsme",
        },
      ],
    },
    partners: {
      sectionLabel: "Uzticami partneri",
      sectionTitle: "Uzņēmumi, ar kuriem sadarbojamies",
    },
    contact: {
      title: "Augam kopā",
      coffeeText: "Patika mūsu saturs? Pacienājiet mūs ar kafiju ☕",
      coffeeButton: "Pacienāt ar kafiju",
    },
    packages: {
      sectionLabel: "Ko mēs piedāvājam",
      sectionTitle: "Mūsu pakalpojumu paketes",
      note: "Visas cenas norādītas EUR. Individuāli projekti pieejami pēc pieprasījuma.",
      items: [
        {
          title: "Reel: Visas 4 platformas",
          desc: "Profesionāls īsformāta video, kas tiek publicēts Instagram, TikTok, YouTube Shorts un Facebook Reels.",
          tags: ["Instagram", "TikTok", "YouTube", "Facebook"],
        },
        {
          title: "Reel: Viena platforma",
          desc: "Profesionāls īsformāta video saturs vienai izvēlētai platformai.",
          tags: ["1 platforma", "Īss video", "Reklāma"],
        },
        {
          title: "Story pakete: 3 Story",
          desc: "Trīs Instagram Story, lai palielinātu redzamību un piesaistītu uzmanību jūsu uzņēmumam.",
          tags: ["3 Story", "Instagram", "Reklāma"],
        },
        {
          title: "Viens Story",
          desc: "Viens Instagram Story ātrai redzamībai un tiešai reklāmai.",
          tags: ["1 Story", "Instagram"],
        },
        {
          title: "YouTube garais video",
          desc: "Detalizēta YouTube satura produkcija uzņēmumu, restorānu vai vietu prezentācijām.",
          tags: ["YouTube", "Garais formāts", "Detalizēts"],
        },
        {
          title: "Īpašs brauciens / Atkārtota filmēšana",
          desc: "Vairāku vizīšu satura produkcija ilgtermiņa projektiem, braucieniem vai atkārtotam saturam.",
          tags: ["Vairākas vizītes", "Individuāls", "Paplašināts"],
        },
        {
          title: "Atklāšana un īpašas dienas",
          desc: "Profesionāla video produkcija atklāšanas pasākumiem, notikumiem un īpašām dienām.",
          tags: ["Atklāšana", "Pasākums", "Īpaša diena"],
        },
        {
          title: "Video piegāde tajā pašā dienā",
          desc: "Papildpakalpojums steidzamai video piegādei tajā pašā dienā.",
          tags: ["Papildpakalpojums", "Steidzami", "Tajā pašā dienā"],
        },
      ],
      customNote: "Citi individuāli projekti pieejami pēc pieprasījuma.",
      websiteNote: "Mājaslapas izstrāde: ietver 1 gada domēnu un atbalstu",
    },
    form: {
      sectionLabel: "Sadarbojieties ar mums",
      sectionTitle: "Uzsāciet sadarbību",
      name: "Vārds, uzvārds",
      company: "Uzņēmums / zīmols",
      email: "E-pasta adrese",
      phone: "Tālruņa numurs",
      service: "Pakalpojuma veids",
      servicePlaceholder: "Izvēlieties pakalpojumu",
      serviceOptions: [
        "Reel: Visas 4 platformas",
        "Reel: Viena platforma",
        "Story pakete: 3 Story",
        "Viens Story",
        "YouTube garais video",
        "Īpašs brauciens / Atkārtota filmēšana",
        "Atklāšana un īpašas dienas",
        "Video piegāde tajā pašā dienā",
        "Mājaslapas izstrāde",
        "Sagaidīšana lidostā / Pilsētas ekskursija",
        "Studentu un ģimeņu atbalsts",
        "Cits / Individuāls",
      ],
      message: "Jūsu ziņojums",
      messagePlaceholder: "Pastāstiet mums par savu projektu...",
      submit: "Nosūtīt pieprasījumu",
      success:
        "Jūsu pieprasījums ir nosūtīts! Mēs ar jums drīzumā sazināsimies.",
    },
  },
} as const;

export type Translations = typeof translations.en;

export function useTranslations(locale: Locale): Translations {
  return translations[locale] as unknown as Translations;
}
