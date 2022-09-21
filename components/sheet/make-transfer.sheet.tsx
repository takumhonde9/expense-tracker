import React, { useRef } from "react";
import ActionSheet, {
  ActionSheetRef,
  SheetProps,
} from "react-native-actions-sheet";
import { StyleSheet, View } from "react-native";

function MakeTransferSheet({ sheetId }: SheetProps<any>) {
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
      <View style={styles.container}></View>
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
    height: "35%",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
  },
});

export default MakeTransferSheet;
