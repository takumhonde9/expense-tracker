import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { FormInput } from "./title.input";
import ChooseCardModal from "../../modals/choose-card.modal";

function AmountInput(props: FormInput) {
  const [cardModalVisible, set] = useState(false);

  const open = () => set(true);
  const close = () => set(false);
  const toggleModal = () => set((prev) => prev);

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="0.00"
          placeholderTextColor="#A1A1A1"
          value={props.values[props.name]}
          onChangeText={props.onChange(props.name)}
          onBlur={props.onBlur(props.name)}
          selectTextOnFocus
          style={styles.textInput}
        />
        <View style={styles.cardSelectorContainer}>
          <Pressable onPress={open} style={styles.cardSelectorButton}>
            <View style={styles.card} />
          </Pressable>
        </View>
      </View>
      <ChooseCardModal
        isVisible={cardModalVisible}
        close={close}
        onChange={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    overflow: "hidden",
  },
  textInput: {
    fontSize: 32,
    color: "#F1F1F1",
    width: 134,
    textAlign: "center",
  },
  cardSelectorContainer: {
    padding: 2,
    borderWidth: 1,
    borderColor: "#c32a2a",
    height: 36,
    width: 50,
    borderRadius: 4,
    marginLeft: 16,
  },
  cardSelectorButton: {},
  card: {
    height: "100%",
    width: "100%",
    backgroundColor: "#c32a2a",
    borderRadius: 4,
  },
});

export default AmountInput;
