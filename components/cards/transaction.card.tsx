import React from "react";
import { Transaction } from "../../types/transaction.type";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "../typography/text";
import { colors } from "../../theme/ui";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigators/root-stack.navigator";

type TransactionCardProps = {
  item: Transaction;
};

function TransactionCard({ item }: TransactionCardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const goToTransaction = () =>
    navigation.navigate("Transaction", {
      id: item.id,
    });

  return (
    <Pressable style={styles.pressable} onPress={goToTransaction}>
      <View style={styles.container}>
        <View style={styles.icon}></View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>
              {moment(item.date, "X").format("DD MMM YYYY")}
            </Text>
          </View>
          <Text style={styles.amount}>
            {item.type === "expense" ? "-" : ""} $ {item.amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    marginBottom: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    backgroundColor: colors["base-600"],
    padding: 14,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#0d0d0d",
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
  },
  title: {
    marginBottom: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#D1D1D1",
    letterSpacing: 0.15,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 9999,
    backgroundColor: "#444444",
  },
  contentContainer: {
    marginLeft: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TransactionCard;
