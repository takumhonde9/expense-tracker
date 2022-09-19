import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootTabsNavigator from "./root-tabs.navigator";
import ExpenseScreen from "../screens/expense.screen";

type RootStackParamsList = {
  RootTabs: undefined;
  Expense: {
    id: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="RootTabs" component={RootTabsNavigator} />
      <RootStack.Screen name="Expense" component={ExpenseScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
