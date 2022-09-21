import React from "react";
import { Transaction } from "../../types/transaction.type";
import { FlatList } from "react-native";
import TransactionCard from "../cards/transaction.card";

function TransactionsList({ items }: { items: Transaction[] }) {
  const renderItem = ({ item }: { item: Transaction }) => (
    <TransactionCard item={item} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default TransactionsList;
