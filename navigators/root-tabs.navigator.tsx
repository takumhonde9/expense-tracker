import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home.screen";
import SettingsNavigator from "./settings.navigator";
import AnalyticsScreen from "../screens/analytics.screen";
import ExpensesScreen from "../screens/expenses.screen";
import AccountsScreen from "../screens/accounts.screen";
import NavigationIcon from "../components/icons/navigation.icon";
import AddTransaction from "../components/add-transaction";
import AddTransactionButton from "../components/buttons/add-transaction.button";

type TabsParamsList = {
  Home: undefined;
  Analytics: undefined;
  Expenses: undefined;
  Settings: undefined;
  Accounts: undefined;
  AddTransaction: undefined;
};

const Tabs = createBottomTabNavigator<TabsParamsList>();

function RootTabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          height: 120,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{
          tabBarBadgeStyle: {
            width: "20%",
          },
          tabBarIcon: ({ color, size }) => (
            <NavigationIcon icon="accounts" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarBadgeStyle: {
            width: "20%",
          },
          headerTitleStyle: {
            color: "transparent",
          },
          tabBarIcon: ({ color, size }) => (
            <NavigationIcon icon="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{
          tabBarBadgeStyle: {
            width: "20%",
          },
          tabBarButton: () => <AddTransactionButton />,
        }}
      />
      <Tabs.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarBadgeStyle: {
            width: "20%",
          },
          tabBarIcon: ({ color, size }) => (
            <NavigationIcon icon="analytics" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarBadgeStyle: {
            width: "20%",
          },
          headerShown: true,
          headerTitleStyle: {
            color: "transparent",
          },
          tabBarIcon: ({ color, size }) => (
            <NavigationIcon icon="expenses" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default RootTabsNavigator;
