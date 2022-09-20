import React from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../theme/ui";
import { defaultSettings } from "../../settings";
import { styles } from "react-native-actions-sheet/dist/src/styles";

type Icon = "delete";
type ActualIcon = "trash-can-outline";
type IconMap = { [key in Icon]: ActualIcon };

const icon: IconMap = {
  delete: "trash-can-outline",
};

type IconButtonProps = {
  name: Icon;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

function IconButton({
  name,
  color = colors[defaultSettings.theme].secondary,
  size = 20,
  style,
}: IconButtonProps) {
  return (
    <Pressable>
      <View style={style}>
        <MaterialCommunityIcons name={icon[name]} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;
