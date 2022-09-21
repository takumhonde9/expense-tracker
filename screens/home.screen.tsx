import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SettingsButton from "../components/buttons/settings.button";
import { ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/typography/text";
import AccountCard from "../components/cards/account.card";
import SummaryStatistic from "../components/statistics/summary.statistic";
import List from "../components/list/list";
import { masterCard, visaCard } from "../test-data";
import { useAppSelector } from "../store/hooks";
import { getRecentTransactions } from "../store/slices/transaction.slice";
import ActionButton from "../components/buttons/action.button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigators/root-stack.navigator";

function HomeScreen() {
  const transactions = useAppSelector(getRecentTransactions);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SettingsButton />,
    });
  }, [navigation]);

  return (
    <ScrollView
      style={{ flex: 1 }}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={styles.subtitle}
            variant="subtitle"
            text="Good Evening"
          />
          <Text style={styles.title} text="Takudzwa Mhonde" />
        </View>
        <ScrollView
          style={{ flex: 1 }}
          bounces={false}
          horizontal
          pagingEnabled
        >
          <AccountCard card={visaCard} />
          <AccountCard card={masterCard} />
        </ScrollView>

        <View style={styles.statsContainer}>
          <SummaryStatistic direction="down" title="Income" value={32} />
          <SummaryStatistic direction="up" title="Expenses" value={35} />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text variant="sectionTitle">Recent Transactions</Text>
          <List items={transactions} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  subtitle: {
    fontSize: 12,
    color: "#a3a3a3",
  },
  title: {
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
