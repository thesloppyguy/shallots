export type MenuItem = {
  name: string
  description: string
}

export type MenuPage =
  | {
      type: "cover"
      title: string
      subtitle: string
      tagline: string
    }
  | {
      type: "section"
      title: string
      items: MenuItem[]
    }

export const shallotsMenuPages: MenuPage[] = [
  {
    type: "cover",
    title: "Shallots",
    subtitle: "Dinner",
    tagline: "Modern Indian Cooking",
  },
  {
    type: "section",
    title: "First Plates",
    items: [
      {
        name: "Rasam",
        description:
          "kollimalai wild pepper, guntur sannam chili, cumin, cilantro",
      },
      {
        name: "Kosambari",
        description: "split yellow moong, pomegranate, cucumber, coconut",
      },
      {
        name: "Mosaru Vade",
        description: "black gram, yogurt, blueberry, rosewater",
      },
      {
        name: "Mangalore Squid Ghee Roast",
        description:
          "wild-caught pacific squid, byadagi chili, coriander, shallots",
      },
      {
        name: "Cauliflower Varuthathu",
        description: "cauliflower, coconut, ginger, curry leaves",
      },
    ],
  },
  {
    type: "section",
    title: "First Plates",
    items: [
      {
        name: "Udhagamandalam Kalan & Avarai Peratal",
        description:
          "baby king oyster and beech mushrooms, snow peas, forest floor spices",
      },
      {
        name: "Shallots Goat Sukka",
        description:
          "pasture-raised baby goat, black cardamom, fennel, shallots",
      },
      {
        name: "Oxtail Milagu Roast",
        description:
          "pasture-raised beef, tellicherry peppercorns, byadagi chili, poppy seed",
      },
      {
        name: "Malnad Koli",
        description:
          "pasture-raised organic chicken, spinach, fenugreek, curry leaves",
      },
      {
        name: "Salmon Rava Fry",
        description:
          "wild-caught alaskan sockeye, semolina, tamarind, coriander seed",
      },
    ],
  },
  {
    type: "section",
    title: "Daily Harvest",
    items: [
      {
        name: "Saidapet Vada Curry",
        description:
          "split chickpeas, tomato, assorted alliums and rhizomes, roasted spices",
      },
      {
        name: "Burrata Makhani",
        description: "burrata cheese, tomato, cream, butter, garlic",
      },
      {
        name: "Kaikari Ishtu",
        description: "asparagus, broccoli, coconut milk, mustard seed",
      },
      {
        name: "Palak Paneer",
        description: "paneer, spinach, fenugreek, garlic, cream",
      },
      {
        name: "Enne Badanekayi",
        description: "baby indian eggplant, peanut, sesame, tamarind",
      },
      {
        name: "Dal Makhani",
        description: "green gram, tomato, cream, butter, garlic",
      },
    ],
  },
  {
    type: "section",
    title: "Land & Sea",
    items: [
      {
        name: "Chicken Tikka",
        description:
          "pasture-raised organic char-grilled chicken, tomato, cream, fenugreek",
      },
      {
        name: "Veal Vindaloo",
        description:
          "pasture-raised slow-braised rose veal, fermented goan chili, vinegar, spices",
      },
      {
        name: "Red Snapper Moilee",
        description:
          "wild-caught atlantic red snapper, coconut milk, beetroot, ginger",
      },
      {
        name: "Sabbasige Lamb Chops",
        description: "pasture-raised lamb, dill, shallots, garlic",
      },
      {
        name: "Kumar's Kozhi Kuzhambu",
        description:
          "pasture-raised cornish hen, coconut, fennel seeds, shallots, black pepper",
      },
      {
        name: "Shallots Hasi Goat Biryani",
        description:
          "pasture-raised baby goat, little-pearled rice, dill, assorted spices and herbs",
      },
    ],
  },
  {
    type: "section",
    title: "Tiffin Center",
    items: [
      {
        name: "Davangere Benne Dosa",
        description: "sona masoori, black gram, parboiled rice, butter",
      },
      {
        name: "Maan Kari Dosa",
        description:
          "minced venison, pasture-raised eggs, shallots, curry leaves, madras spices",
      },
      {
        name: "Thatte Idli",
        description: "ponni raw, black gram, flattened rice, sago, fenugreek",
      },
    ],
  },
  {
    type: "section",
    title: "Sweet Endings",
    items: [
      {
        name: "Queen's Emerald",
        description: "betel leaf, rose petal jam, lychee, candied fennel seed",
      },
      {
        name: "Thati Munjalu",
        description: "ice apple, coconut, vetiver, butterfly pea, basil seed",
      },
      {
        name: "Saffron Almond Silk",
        description: "milk, saffron, almond, ghee, cardamom",
      },
      {
        name: "Attu Paal Jigarthanda",
        description:
          "pasture-raised organic goat milk, indian sarsaparilla, caramel",
      },
    ],
  },
  {
    type: "section",
    title: "Stone & Fire",
    items: [
      { name: "Butter Naan", description: "" },
      { name: "Garlic Naan", description: "" },
      { name: "Full Metal Jacket Maharani Truffle Naan", description: "" },
      { name: "Kal Dosa", description: "" },
      { name: "Plain / Butter Roti", description: "" },
    ],
  },
]
