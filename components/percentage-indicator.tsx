import React from "react";
import { View, StyleSheet } from "react-native";

function PercentageIndicator({ percentage }: { percentage: number }) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.indicator,
          { width: `${Math.floor(percentage * 100)}%` },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.2)",
    height: 7,
    borderRadius: 9999,
  },
  indicator: {
    backgroundColor: "#F1F1F1",
    height: 5,
    borderRadius: 9999,
  },
});

export default PercentageIndicator;
