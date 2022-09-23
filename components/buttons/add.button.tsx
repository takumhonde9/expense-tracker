import { View, StyleSheet, Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../theme/ui";
import { SheetManager } from "react-native-actions-sheet";
import { ADD_ITEM_SHEET } from "../../registers/action-sheet/constants";

function AddButton() {
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => SheetManager.show(ADD_ITEM_SHEET)}
      >
        <View style={styles.button}>
          <Octicons name="plus" size={25} color="#f1f1f1" />
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.accent,
    borderRadius: 9999,
    elevation: 12,
    shadowColor: "#000000",
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
  },
});

export default AddButton;
