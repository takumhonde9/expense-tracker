import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootTabsNavigator from "./root-tabs.navigator";
import ExpenseScreen from "../screens/expense.screen";
import SettingsScreen from "../screens/settings.screen";

export type RootStackParamsList = {
  RootTabs: undefined;
  Settings: undefined;
  Expense: {
    id: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="RootTabs"
        component={RootTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          title: "",
        }}
      />
      <RootStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
