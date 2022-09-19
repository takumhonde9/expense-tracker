import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home.screen";
import SettingsNavigator from "./settings.navigator";
import AnalyticsScreen from "../screens/analytics.screen";
import ExpensesScreen from "../screens/expenses.screen";

type TabsParamsList = {
  Home: undefined;
  Analytics: undefined;
  Expenses: undefined;
  Settings: undefined;
};

const Tabs = createBottomTabNavigator<TabsParamsList>();

function RootTabsNavigator() {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Analytics" component={AnalyticsScreen} />
      <Tabs.Screen name="Expenses" component={ExpensesScreen} />
      <Tabs.Screen name="Settings" component={SettingsNavigator} />
    </Tabs.Navigator>
  );
}

export default RootTabsNavigator;
