import { Transaction } from "./types/transaction.type";
import { Card } from "./types/card.type";

export const transactions: Transaction[] = [
  {
    id: "-NCC4TBgVdAotV_qFHoB",
    category: "drink",
    date: "1663359180",
    amount: 54.99,
    note: "Birthday celebration w bae",
    title: "The Red Accordion",
    type: "expense",
  },
];

export const visaCard: Card = {
  lastDigits: 555,
  name: "Scotiabank",
  type: "visa",
  balance: 1000,
  percentage: 1,
  id: "card-1",
};

export const masterCard: Card = {
  lastDigits: 999,
  name: "Koho",
  type: "mastercard",
  balance: 500,
  percentage: 0.7,
  id: "card-2",
};
