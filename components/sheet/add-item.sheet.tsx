import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import ActionSheet, {
  ActionSheetRef,
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";
import ActionButton from "../buttons/action.button";
import {
  ADD_ITEM_SHEET,
  MAKE_TRANSFER_SHEET,
} from "../../registers/action-sheet/constants";
import { navigate } from "../../navigators/root-stack.navigator";

function AddItemSheet({ sheetId }: SheetProps<any>) {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      animated
      defaultOverlayOpacity={0.75}
      containerStyle={styles.actionSheetOverlay}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}
    >
      <View style={styles.container}>
        <ActionButton
          onPress={() => {
            SheetManager.hide(ADD_ITEM_SHEET).then(() => {
              navigate("AddTransaction", {});
            });
          }}
          action="add-transaction"
          margin
        />
        <ActionButton
          onPress={() => {
            SheetManager.hide(ADD_ITEM_SHEET).then(() => {
              navigate("AddAccount", {});
            });
          }}
          action="add-account"
          margin
        />
        <ActionButton
          onPress={() => {
            SheetManager.hide(ADD_ITEM_SHEET).then(() => {
              SheetManager.show(MAKE_TRANSFER_SHEET);
            });
          }}
          action="make-transfer"
        />
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  actionSheetOverlay: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#1c1c1c",
    padding: 10,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: "#434343",
  },
  container: {
    padding: 5,
    height: 250,
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
  },
});

export default AddItemSheet;
