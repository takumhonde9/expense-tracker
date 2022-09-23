type Icon =
  | "currency-usd"
  | "credit-card-plus-outline"
  | "bank-transfer"
  | "cash"
  | "piggy-bank-outline";

export type Action =
  | "add-transaction"
  | "add-account"
  | "make-transfer"
  | "expense"
  | "income";

export type Item = {
  [key in Action]: {
    icon: Icon;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  };
};
