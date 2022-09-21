import React from "react";
import { useAppSelector } from "../store/hooks";
import TransactionsList from "../components/list/transactions.list";
import { View } from "react-native";
import { selectTransactions } from "../store/slices/transaction.slice";

function TransactionsScreen() {
  const transactions = useAppSelector(selectTransactions);

  return (
    <View>
      <TransactionsList items={transactions} />
    </View>
  );
}

export default TransactionsScreen;
