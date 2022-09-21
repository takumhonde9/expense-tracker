export type TransactionType = "expense" | "income";

export type Transaction = {
  category?: string;
  date: string;
  amount: number;
  note?: string;
  title: string;
  id: string;
  type: TransactionType;
  cardId?: string;
};
