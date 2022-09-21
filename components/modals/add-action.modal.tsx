import React from "react";
import Modal from "react-native-modal";
import { Dimensions, View, StyleSheet } from "react-native";
import ActionButton from "../buttons/action.button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigators/root-stack.navigator";
import { SheetManager } from "react-native-actions-sheet";
import {
  ADD_ITEM_SHEET,
  MAKE_TRANSFER_SHEET,
} from "../../registers/action-sheet/constants";

type AddActionModalProps = {
  isVisible: boolean;
  close: () => void;
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function AddActionModal({ isVisible, close }: AddActionModalProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const closeWrapper = (action: () => void) => {
    close();
    action();
  };

  const addTransaction = () => {
    navigation.navigate("AddTransaction", {
      id: "",
      type: "expense",
    });
  };
  const addAccount = () => navigation.navigate("AddAccount");

  return (
    <Modal
      deviceHeight={height}
      deviceWidth={width}
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection={["down"]}
      onBackdropPress={close}
      swipeThreshold={5}
      onSwipeComplete={({ swipingDirection }) => {
        if (swipingDirection === "down") {
          close();
        }
      }}
    >
      <View style={styles.container}>
        <View style={styles.actionSheetOverlay}>
          <View style={styles.indicatorContainer}>
            <View style={styles.indicator} />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <ActionButton
              onPress={() => closeWrapper(addTransaction)}
              action="add-transaction"
              margin
            />
            <ActionButton
              onPress={() => closeWrapper(addAccount)}
              action="add-account"
              margin
            />
            <ActionButton
              onPress={() =>
                closeWrapper(() => SheetManager.show(MAKE_TRANSFER_SHEET))
              }
              action="make-transfer"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  actionSheetOverlay: {
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#1c1c1c",
    padding: 16,
  },
  indicatorContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: "#434343",
    borderRadius: 999,
  },
  container: {
    justifyContent: "flex-end",
    flex: 1,
  },
});

export default AddActionModal;
