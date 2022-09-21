import React, { useLayoutEffect } from "react";
import Text from "../components/typography/text";
import { View, StyleSheet, ScrollView } from "react-native";
import { colors } from "../theme/ui";
import { Octicons } from "@expo/vector-icons";
import { DateUtility } from "../utilities/date.utility";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamsList } from "../navigators/root-stack.navigator";
import { transactions } from "../test-data";
import BgContainer from "../components/containers/bg.container";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ExpenseScreenButtonGroup from "../components/groups/expense-screen-button.group";

type ExpenseScreenRouteProp = RouteProp<RootStackParamsList, "Transaction">;

function TransactionScreen() {
  const route = useRoute<ExpenseScreenRouteProp>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ExpenseScreenButtonGroup />,
    });
  });

  const transaction = transactions.find(
    (transaction) => transaction.id === route.params.id
  );

  if (!transaction) {
    return <View></View>;
  }

  return (
    <ScrollView style={{ flex: 1 }} bounces={false}>
      <View style={styles.container}>
        <View style={styles.dateButton}>
          <Octicons name="calendar" size={16} color="#f1f1f1" />
          <Text style={styles.dateText} variant="subtitle">
            {DateUtility.formatToReadableDate(transaction.date)}
          </Text>
        </View>
        <View style={styles.headerRow}>
          <View style={styles.categoryContainer}></View>
          <Text variant="title">{transaction.title}</Text>
        </View>
      </View>
      <BgContainer>
        <View style={{ alignItems: "center" }}>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>
              $ {transaction.amount.toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={styles.notesContainer}>
          <View style={styles.notesHeader}>
            <Text style={{ marginBottom: 0 }} variant="sectionTitle">
              Notes
            </Text>
          </View>
          <View style={styles.notesBody}>
            <Text variant={"subtitle"}>{transaction.note}</Text>
          </View>
        </View>
      </BgContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: colors["base-600"],
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    // borderRadius: 999,
    // borderWidth: 1,
    // paddingHorizontal: 8,
    // paddingVertical: 2,
    // borderColor: "#3f1c58",
  },
  amountContainer: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    borderRadius: 999,
    marginTop: 16,
    marginBottom: 32,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryContainer: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: "#593476",
  },
  dateText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  amountText: {
    color: "#121212",
    fontSize: 24,
    fontWeight: "bold",
  },
  notesContainer: {},
  notesHeader: {
    padding: 12,
    backgroundColor: colors["base-600"],
    items: "center",
  },
  notesBody: {
    minHeight: 100,
    padding: 12,
    backgroundColor: "#22192f",
  },
});

export default TransactionScreen;
