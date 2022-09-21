import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Transaction } from "../../types/transaction.type";
import { DateUtility } from "../../utilities/date.utility";
import { transactionExists } from "../../utilities/utility";

interface TransactionState {
  items: Transaction[];
}

interface EditTransaction {
  id: string;
  transaction: Transaction;
}

const initialState: TransactionState = {
  items: [],
};

export const TransactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    receiveTransactions: (state, { payload }: PayloadAction<Transaction[]>) => {
      state.items.push(...payload);
    },

    addTransaction: (state, { payload }: PayloadAction<Transaction>) => {
      const existingTransaction = transactionExists(payload.id, state.items);

      if (!existingTransaction) {
        state.items.push(payload);
      }
    },

    editTransaction: (state, { payload }: PayloadAction<EditTransaction>) => {
      const existing = transactionExists(payload.id, state.items);

      if (existing) {
        const index = state.items.findIndex((t) => t.id === payload.id);
        state.items[index] = payload.transaction;
      }
    },

    removeTransaction: (state, { payload }: PayloadAction<{ id: string }>) => {
      const existing = transactionExists(payload.id, state.items);

      if (existing) {
        const index = state.items.findIndex((t) => t.id === payload.id);
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addTransaction, editTransaction, removeTransaction } =
  TransactionSlice.actions;

export const selectTransactions = (state: RootState) =>
  state.transactions.items;

export default TransactionSlice.reducer;

// SELECTORS
export const getRecentTransactions = createSelector(
  selectTransactions,
  (items) =>
    items.filter((transaction) =>
      DateUtility.inPeriod(transaction.date, "week")
    )
);
