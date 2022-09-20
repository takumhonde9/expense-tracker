import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/settings.screen";

export type SettingsStackParamList = {
  SettingsNavigator: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SettingsNavigator" component={Settings} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
