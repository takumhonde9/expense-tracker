import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { colors } from "../../theme/ui";
import { defaultSettings } from "../../settings";

type BgContainerProps = {
  children: any;
  variant?: "primary" | "secondary";
};

function BgContainer({ children, variant }: BgContainerProps) {
  return (
    <SafeAreaView>
      <View style={[styles.base, styles[variant || "primary"]]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    padding: 16,
  },
  primary: {
    backgroundColor: colors[defaultSettings.theme].primary,
  },
  secondary: {
    backgroundColor: colors[defaultSettings.theme].secondary,
  },
});

export default BgContainer;
