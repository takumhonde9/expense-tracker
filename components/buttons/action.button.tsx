import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../typography/text";
import { Action } from "../../types/actions.type";
import { item } from "../../constants";

type ActionButtonProps = {
  action: Action;
  margin?: boolean;
  onPress: () => void;
};

function ActionButton({ action, margin, onPress }: ActionButtonProps) {
  const actionItem = item[action];

  return (
    <Pressable onPress={onPress} style={{ padding: 7.5 }}>
      <View style={[styles.container, margin ? styles.margin : null]}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: actionItem.bgColor,
            },
          ]}
        >
          <MaterialCommunityIcons
            name={actionItem.icon}
            size={26}
            color={actionItem.color}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {actionItem.title}
          </Text>
          <Text style={{ fontSize: 12, color: "#959595" }}>
            {actionItem.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 25,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActionButton;
