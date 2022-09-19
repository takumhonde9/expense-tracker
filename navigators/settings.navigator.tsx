import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/settings.screen";

type StackParamList = {
  SettingsNavigator: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsNavigator" component={Settings} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
