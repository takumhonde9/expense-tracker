import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import Text from "../typography/text";
import { colors } from "../../theme/ui";
import { defaultSettings } from "../../settings";

function Button({
  text,
  variant,
}: {
  text: any;
  variant?: "primary" | "secondary";
}) {
  return (
    <Pressable style={styles.button}>
      <View style={[styles.container, styles[variant || "primary"]]}>
        <Text variant="button">{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {},
  container: {
    flex: 1,
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
