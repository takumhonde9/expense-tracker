import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { defaultSettings } from "./settings";
import { theme } from "./theme/navigators";
import RootStackNavigator from "./navigators/root-stack.navigator";

export default function App() {
  return (
    <>
      <StatusBar style={defaultSettings.theme === "dark" ? "light" : "dark"} />
      <NavigationContainer theme={theme}>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
}
