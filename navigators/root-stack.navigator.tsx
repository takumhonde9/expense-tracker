import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootTabsNavigator from "./root-tabs.navigator";
import TransactionScreen from "../screens/transaction.screen";
import SettingsScreen from "../screens/settings.screen";
import AddTransactionScreen from "../screens/add-transaction.screen";
import TransferScreen from "../screens/transfer.screen";
import AddAccountScreen from "../screens/add-account.screen";
import { createRef } from "react";
import { NavigationContainerRef } from "@react-navigation/native";

export type RootStackParamsList = {
  RootTabs: undefined;
  Settings: undefined;
  MakeTransfer: undefined;
  AddAccount: undefined;
  AddTransaction: {
    id?: string;
    type?: "income" | "expense";
  };
  Transaction: {
    id: string;
  };
};

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamsList>>();

export const isReadyRef = createRef();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

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
        name="Transaction"
        component={TransactionScreen}
        options={{
          title: "",
        }}
      />
      <RootStack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{
          headerShown: false,
          title: "Add transaction",
          presentation: "modal",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <RootStack.Screen
        name="AddAccount"
        component={AddAccountScreen}
        options={{
          title: "Create account",
          presentation: "modal",
        }}
      />
      <RootStack.Screen
        name="MakeTransfer"
        component={TransferScreen}
        options={{
          title: "Make a transfer",
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
