import React from "react";
import { View } from "react-native";
import Button from "../buttons/button";
import IconButton from "../buttons/icon.button";

function ExpenseScreenButtonGroup() {
  const onPressDelete = () => {};

  const onPressEdit = () => {};

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Button text="edit" />
      <IconButton
        style={{ marginLeft: 16 }}
        name="delete"
        size={28}
        color={"#ca2b2b"}
      />
    </View>
  );
}

export default ExpenseScreenButtonGroup;
