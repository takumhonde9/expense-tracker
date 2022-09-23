import React from "react";
import {
  Pressable,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Text from "../typography/text";
import { colors } from "../../theme/ui";
import { defaultSettings } from "../../settings";

function Button({
  text,
  variant,
  style,
  buttonStyle,
  onPress,
}: {
  text: any;
  variant?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: Function;
}) {
  return (
    <Pressable
      style={[styles.button, buttonStyle]}
      onPress={() => onPress && onPress()}
    >
      <View style={[styles.container, styles[variant || "primary"], style]}>
        <Text
          variant="button"
          style={variant === "secondary" ? { color: "#F1F1F1" } : null}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  primary: {
    backgroundColor: colors[defaultSettings.theme].secondary,
  },
  secondary: {
    backgroundColor: colors.accent,
  },
});

export default Button;
