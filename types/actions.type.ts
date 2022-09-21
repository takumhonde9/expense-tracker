type Icon = "currency-usd" | "credit-card-plus-outline" | "bank-transfer";

export type Action = "add-transaction" | "add-account" | "make-transfer";

export type Item = {
  [key in Action]: {
    icon: Icon;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  };
};
