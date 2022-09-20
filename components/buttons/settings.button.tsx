import React from "react";
import { Pressable, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../theme/ui";
import { defaultSettings } from "../../settings";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigators/root-stack.navigator";

function SettingsButton() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const openSettings = () => navigation.navigate("Settings");
  return (
    <Pressable onPress={openSettings}>
      <View style={{ marginRight: 16 }}>
        <Octicons
          name="gear"
          size={24}
          color={colors[defaultSettings.theme].secondary}
        />
      </View>
    </Pressable>
  );
}

export default SettingsButton;
