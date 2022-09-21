import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { defaultSettings } from "./settings";
import { theme } from "./theme/navigators";
import RootStackNavigator, {
  navigationRef,
} from "./navigators/root-stack.navigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SheetProvider } from "react-native-actions-sheet";
import "./registers/action-sheet/sheet.register";

export default function App() {
  return (
    <>
      <StatusBar style={defaultSettings.theme === "dark" ? "light" : "dark"} />
      <Provider store={store}>
        <SheetProvider>
          <NavigationContainer ref={navigationRef} theme={theme}>
            <RootStackNavigator />
          </NavigationContainer>
        </SheetProvider>
      </Provider>
    </>
  );
}
