import React from "react";
import { Expense } from "../../types/transaction.type";
import { FlatList } from "react-native";
import TransactionCard from "../cards/transaction.card";

function ExpensesList({ items }: { items: Expense[] }) {
  const renderItem = ({ item }: { item: Expense }) => (
    <TransactionCard item={item} variant="expense" />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
