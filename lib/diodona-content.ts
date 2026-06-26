export const shallotsImages = {
  logo: "/assets/raw logo.png",
  logoFull:
    "https://www.diodona.it/wp-content/uploads/2025/08/Diodona-Logo-completo.svg",
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
  veranda:
    "https://www.diodona.it/wp-content/uploads/2026/05/Veranda-scaled.jpg",
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
    "/food/All dishes.png",
    "/food/Cauliflower Varuthathu_01.png",
    "/food/Red Snapper Moilee_01.png",
    "/food/Mosaru Vade_01.png",
    "/food/Shallots Goat Sukka_02.png",
    "/food/Cauliflower Varuthathu_02.png",
  ],
} as const

export const pastEvents = [
  {
    date: "Friday, March 6, 2026",
    title: "VALTELLINA EVENING | 03.06.2026",
    href: "https://www.diodona.it/serata-valtellina-2026/",
  },
  {
    date: "Sunday, February 22, 2026",
    title: "OLYMPIC APRES SKI – closing ceremony",
    href: "https://www.diodona.it/apres-ski-olimpico-2/",
  },
  {
    date: "Friday, February 6, 2026",
    title: "OLYMPIC APRES SKI – opening ceremony",
    href: "https://www.diodona.it/apres-ski-olimpico-1/",
  },
  {
    date: "Sunday, November 23, 2025",
    title: "Charity tombola for Sim-patia",
    href: "https://www.diodona.it/tombolata-benefica-per-sim-patia/",
  },
  {
    date: "Sunday, October 19, 2025",
    title: "Yoga in the Lemon House",
    href: "https://www.diodona.it/yoga-in-limonaia/",
  },
  {
    date: "Friday, October 17, 2025",
    title: "The Unscrewed",
    href: "https://www.diodona.it/gli-svitati/",
  },
  {
    date: "Sunday, August 24, 2025",
    title: "The forest and the stars",
    href: "https://www.diodona.it/il-bosco-e-le-stelle/",
  },
  {
    date: "Friday, August 8, 2025",
    title: "50 shades of grilling",
    href: "https://www.diodona.it/50-sfumature-di-griglia/",
  },
  {
    date: "Friday, April 11, 2025",
    title: "Et Voilà • French evening",
    href: "https://www.diodona.it/et-voila-serata-francese/",
  },
  {
    date: "Friday, March 28, 2025",
    title: "Marchignola evening",
    href: "https://www.diodona.it/serata-marchignola/",
  },
  {
    date: "Saturday, March 8, 2025",
    title: "Girls' apericena 2025",
    href: "https://www.diodona.it/apericena-tra-amiche-2025/",
  },
  {
    date: "Friday, February 28, 2025",
    title: "Giulio uncorks the Barolo",
    href: "https://www.diodona.it/giulio-stappa-il-barolo/",
  },
] as const

export const diningSpaces = [
  {
    name: "Place 1",
    description:
      "A modern, welcoming space, curated in every detail. Perfect for private dinners and intimate celebrations.",
    image: shallotsImages.veranda,
    rotate: "-1.47deg",
  },
  {
    name: "Place 2",
    description:
      "Warm and inviting with a wood-burning fireplace, a curated wine selection on display, and thoughtful details throughout.",
    image: shallotsImages.camino,
    rotate: "0deg",
  },
  {
    name: "Place 3",
    description:
      "A bright, airy setting for al fresco dining among jasmine, roses, and aromatic herbs.",
    image: shallotsImages.gelsomini,
    rotate: "1deg",
  },
] as const

export const navLinks = [
  { label: "Restaurant", href: "#" },
  { label: "Location", href: "#" },
  { label: "Lemon House", href: "#" },
  { label: "Weddings & Events", href: "#" },
  { label: "Family", href: "#" },
  { label: "Memory Album", href: "#diary" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#footer" },
] as const
