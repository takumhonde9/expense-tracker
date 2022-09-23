import { Item } from "./types/actions.type";
import { Category, CategoryIcon } from "./types/categories.type";

export const item: Item = {
  "add-transaction": {
    icon: "currency-usd",
    title: "Add a transaction",
    description: "Add a record of an expense or income",
    color: "#32ae0f",
    bgColor: "#ace69e",
  },
  "add-account": {
    icon: "credit-card-plus-outline",
    title: "Create an account",
    description: "Add a new account",
    color: "#cb5ac6",
    bgColor: "#f2b2ed",
  },
  "make-transfer": {
    icon: "bank-transfer",
    title: "Make a transfer",
    description: "Transfer money between accounts",
    color: "#00a1d1",
    bgColor: "#c0e7ee",
  },
  expense: {
    icon: "cash",
    title: "Expense",
    description: "Add a record of an expense",
    color: "#fffdd6",
    bgColor: "#b7b77c",
  },
  income: {
    icon: "piggy-bank-outline",
    title: "Income",
    description: "Add a record of an income",
    color: "#db9bfe",
    bgColor: "#4b3858",
  },
};

export const categories: Category[][] = [
  ["eating", "drink", "credit", "groceries", "utility"],
  ["health", "transport", "grooming", "apparel", "entertainment"],
];

export const categoryItem: {
  [key in Category]: { icon: CategoryIcon; color: string; readable: string };
} = {
  eating: {
    color: "#F9C74F",
    icon: "silverware-fork-knife",
    readable: "Eating",
  },
  apparel: {
    color: "#F3722C",
    icon: "tshirt-crew",
    readable: "Apparel",
  },
  credit: {
    color: "#50921d",
    icon: "credit-card-outline",
    readable: "Credit",
  },
  drink: {
    color: "#F9844A",
    icon: "glass-wine",
    readable: "Drinks",
  },
  entertainment: {
    color: "#F8961E",
    icon: "movie-filter-outline",
    readable: "Movies",
  },
  groceries: {
    color: "#43AA8B",
    icon: "basket",
    readable: "Groceries",
  },
  health: {
    color: "#F94144",
    icon: "medical-bag",
    readable: "Health",
  },
  transport: {
    color: "#4D908E",
    icon: "bus",
    readable: "Transport",
  },
  utility: {
    color: "#577590",
    icon: "water",
    readable: "Utility",
  },
  grooming: {
    icon: "content-cut",
    color: "#277DA1",
    readable: "Grooming",
  },
};
