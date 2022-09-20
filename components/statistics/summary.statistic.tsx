import React from "react";
import { colors } from "../../theme/ui";
import { StyleSheet, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Text from "../typography/text";

type SummaryStatisticProp = {
  direction: "up" | "down";
  title: string;
  value: number;
};

type StatVariant = {
  color: string;
  bg: string;
  icon: "arrow-up" | "arrow-down";
};

type Variant = {
  up: StatVariant;
  down: StatVariant;
};

function SummaryStatistic({ direction, title, value }: SummaryStatisticProp) {
  const variant: Variant = {
    up: {
      color: "#36ea07",
      bg: "rgb(195,255,175)",
      icon: "arrow-up",
    },
    down: {
      color: "#ea1607",
      bg: "rgb(255,175,175)",
      icon: "arrow-down",
    },
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: variant[direction].bg,
          },
        ]}
      >
        <Octicons
          name={variant[direction].icon}
          size={28}
          color={variant[direction].color}
        />
      </View>
      <View>
        <Text style={[styles.heading, { color: variant[direction].color }]}>
          {direction === "up" ? "+" : "-"} {value}%
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: colors["base-600"],
    padding: 16,
    width: "48.5%",
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#0d0d0d",
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 9999,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 4,
    letterSpacing: 0.15,
  },
});

export default SummaryStatistic;
