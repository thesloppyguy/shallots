export const shallotsImages = {
  logo: "/assets/raw logo.png",
  logoFull: "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Logo-completo.svg",
  hero: "/assets/hero.png",
  menuCarta:
    "https://www.diodona.it/wp-content/uploads/2025/10/Carta-Diodona-Autunno25-copertina-730x1024.jpg",
  menuVini:
    "https://www.diodona.it/wp-content/uploads/2026/03/Diodona_Menu_Vini-730x1024.jpg",
  event1:
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-eventi-1-1024x684.webp",
  event3:
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-eventi-3-1024x684.webp",
  chefKitchen:
    "https://www.diodona.it/wp-content/uploads/2025/10/diodona-2V1A5203-683x1024.webp",
  veranda: "https://www.diodona.it/wp-content/uploads/2026/05/Veranda-scaled.jpg",
  camino:
    "https://www.diodona.it/wp-content/uploads/2026/04/Ristorante_camino-scaled.jpeg",
  gelsomini:
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-Corte-dei-Gelsomini-scaled.webp",
  chefEzio:
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-chef-Ezio.webp",
  piatti1:
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-Piatti-2.webp",
  piatti2:
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-Piatti.webp",
  dishes: [
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-specialita-menu-1-683x1024.webp",
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-specialita-menu-3-683x1024.webp",
    "https://www.diodona.it/wp-content/uploads/2026/05/Pranzo-Ristorante-Varese-1-683x1024.jpg",
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-specialita-menu-5-683x1024.webp",
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-specialita-menu-risotti-1-682x1024.webp",
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Ristorante-Malnate-specialita-menu-risotti-2-683x1024.webp",
  ],
} as const

export const pastEvents = [
  {
    date: "venerdì 6 Marzo 2026",
    title: "SERATA VALTELLINESE | 06.03.2026",
    href: "https://www.diodona.it/serata-valtellina-2026/",
  },
  {
    date: "domenica 22 Febbraio 2026",
    title: "APRES SKI OLIMPICO – chiusura olimpiadi",
    href: "https://www.diodona.it/apres-ski-olimpico-2/",
  },
  {
    date: "venerdì 6 Febbraio 2026",
    title: "APRES SKI OLIMPICO – apertura olimpiadi",
    href: "https://www.diodona.it/apres-ski-olimpico-1/",
  },
  {
    date: "domenica 23 Novembre 2025",
    title: "Tombolata benefica per Sim-patia",
    href: "https://www.diodona.it/tombolata-benefica-per-sim-patia/",
  },
  {
    date: "domenica 19 Ottobre 2025",
    title: "Yoga in Limonaia",
    href: "https://www.diodona.it/yoga-in-limonaia/",
  },
  {
    date: "venerdì 17 Ottobre 2025",
    title: "Gli svitati",
    href: "https://www.diodona.it/gli-svitati/",
  },
  {
    date: "domenica 24 Agosto 2025",
    title: "Il bosco e le stelle",
    href: "https://www.diodona.it/il-bosco-e-le-stelle/",
  },
  {
    date: "venerdì 8 Agosto 2025",
    title: "50 sfumature di griglia",
    href: "https://www.diodona.it/50-sfumature-di-griglia/",
  },
  {
    date: "venerdì 11 Aprile 2025",
    title: "Et Voilà • Serata francese",
    href: "https://www.diodona.it/et-voila-serata-francese/",
  },
  {
    date: "venerdì 28 Marzo 2025",
    title: "Serata marchignola",
    href: "https://www.diodona.it/serata-marchignola/",
  },
  {
    date: "sabato 8 Marzo 2025",
    title: "Apericena tra amiche 2025",
    href: "https://www.diodona.it/apericena-tra-amiche-2025/",
  },
  {
    date: "venerdì 28 Febbraio 2025",
    title: "Giulio stappa il Barolo",
    href: "https://www.diodona.it/giulio-stappa-il-barolo/",
  },
] as const

export const diningSpaces = [
  {
    name: "la Veranda",
    description:
      "Un ambiente moderno e accogliente, curato in ogni dettaglio. Perfetto anche per cene riservate e piccole cerimonie.",
    image: shallotsImages.veranda,
    rotate: "-1.47deg",
  },
  {
    name: "la Sala del Camino",
    description:
      "Accogliente e calda grazie al camino a legna, una selezione di vini a vista, l'affettatrice e la collezione di tazzine da caffè del Nonno.",
    image: shallotsImages.camino,
    rotate: "0deg",
  },
  {
    name: "la Corte dei Gelsomini",
    description:
      "Un ambiente fresco e luminoso che ospita il ristorante d'estate tra gelsomini, rose ed erbe aromatiche.",
    image: shallotsImages.gelsomini,
    rotate: "1deg",
  },
] as const

export const navLinks = [
  { label: "Ristorante", href: "#" },
  { label: "Location", href: "#" },
  { label: "Spazio Limonaia", href: "#" },
  { label: "Matrimoni ed Eventi", href: "#" },
  { label: "Famiglia", href: "#" },
  { label: "Album dei Ricordi", href: "#diary" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contatti", href: "#footer" },
] as const
