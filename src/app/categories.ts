// src/app/categories.ts

export interface Category {
  title: string;
  items: string[];
}

const categories: Category[] = [
  {
    title: "Holidays",
    items: ["Gifts", "Make eggnog for office party"],
  },
  {
    title: "Home",
    items: ["Pay landlord", "Pay power bill", "Unclog drain"],
  },
  {
    title: "Shopping",
    items: ["Eggs", "Peanut butter", "Milk", "Peanut butter", "Milk", "Peanut butter", "Milk"],
  },
  {
    title: "Prepping",
    items: [
      "Dig hole for bunker",
      "Buy concrete",
      "Buy provisions",
      "Buy concrete",
      "Buy provisions",
      "Buy concrete",
      "Buy provisions",
    ],
  },
  {
    title: "Books to read",
    items: ["Finnegans Wake"],
  },
  {
    title: "Eat more vegetables",
    items: [],
  },
];

export default categories;
