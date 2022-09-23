import React from "react";
import { View, Omit } from "react-native";
import CreateTransactionForm from "../components/forms/create-transaction.form";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigators/root-stack.navigator";
import { Transaction } from "../types/transaction.type";
import { DateUtility } from "../utilities/date.utility";

const initialValues: Omit<Transaction, "id"> = {
  amount: 0,
  category: "",
  date: DateUtility.getToday(),
  note: "",
  title: "New Transaction",
  type: "expense",
};

function AddTransactionScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const goBack = () => navigation.goBack();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1c1c1c",
        padding: 16,
      }}
    >
      <CreateTransactionForm initialValues={initialValues} close={goBack} />
    </View>
  );
}

export default AddTransactionScreen;
