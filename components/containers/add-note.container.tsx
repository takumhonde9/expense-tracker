import React from "react";
import { View } from "react-native";
import { colors } from "../../theme/ui";
import { SimpleLineIcons } from "@expo/vector-icons";
import Button from "../buttons/button";
import { FormInput } from "../forms/inputs/title.input";

function AddNoteContainer(props: FormInput) {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.accent,
          borderRadius: 999,
          alignItems: "center",
          paddingHorizontal: 14,
          justifyContent: "center",
        }}
      >
        <SimpleLineIcons name="note" color="#F1F1F1" size={18} />
        <Button
          text="Add Note"
          style={{ paddingVertical: 10, paddingHorizontal: 0, marginLeft: 10 }}
          variant="secondary"
        />
      </View>
    </View>
  );
}

export default AddNoteContainer;
