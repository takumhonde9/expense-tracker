import React from "react";
import { Transaction } from "../../types/transaction.type";
import { View } from "react-native";
import TransactionCard from "../cards/transaction.card";

function List({ items }: { items: Transaction[] }) {
  if (items.length > 15) {
    throw new Error("Use a FlatList instead of a common list");
  }
  return (
    <View>
      {items.map((item) => (
        <TransactionCard key={item.id} item={item} />
      ))}
    </View>
  );
}

export default List;
