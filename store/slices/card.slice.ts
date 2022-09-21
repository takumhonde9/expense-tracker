import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Card } from "../../types/card.type";

function cardExists(id: string, cards: Card[]): boolean {
  const accountCard = cards.find((a) => a.id === id);
  return !!accountCard;
}

interface CardState {
  cards: Card[];
}

interface EditCard {
  id: string;
  card: Card;
}

const initialState: CardState = {
  cards: [],
};

export const CardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, { payload }: PayloadAction<Card>) => {
      const existingCards = cardExists(payload.id, state.cards);

      if (!existingCards) {
        state.cards.push(payload);
      }
    },

    editCard: (state, { payload }: PayloadAction<EditCard>) => {
      const existing = cardExists(payload.id, state.cards);

      if (existing) {
        const index = state.cards.findIndex((t) => t.id === payload.id);
        state.cards[index] = payload.card;
      }
    },

    removeCard: (state, { payload }: PayloadAction<{ id: string }>) => {
      const existing = cardExists(payload.id, state.cards);

      if (existing) {
        const index = state.cards.findIndex((t) => t.id === payload.id);
        state.cards.splice(index, 1);
      }
    },
  },
});

export const { addCard, editCard, removeCard } = CardSlice.actions;

export const selectCard = (state: RootState) => state.transactions;

export default CardSlice.reducer;
