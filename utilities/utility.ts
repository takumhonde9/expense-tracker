import { Transaction } from "../types/transaction.type";

export function transactionExists(
  id: string,
  transactions: Transaction[]
): boolean {
  const transaction = transactions.find((t) => t.id === id);
  return !!transaction;
}
