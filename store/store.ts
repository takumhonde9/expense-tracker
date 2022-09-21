import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./slices/transaction.slice";
import cardsReducer from "./slices/card.slice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
