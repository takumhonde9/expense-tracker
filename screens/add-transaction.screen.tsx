import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Pressable, Omit } from "react-native";
import CreateTransactionForm from "../forms/create-transaction.form";
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
      <View style={{ alignItems: "flex-end" }}>
        <Pressable
          onPress={goBack}
          style={{ backgroundColor: "#2e2e2e", padding: 4, borderRadius: 999 }}
        >
          <Ionicons name="close" color="#f1f1f1" size={26} />
        </Pressable>
      </View>
      <CreateTransactionForm initialValues={initialValues} />
    </View>
  );
}

export default AddTransactionScreen;
