import React from "react";
import Modal from "react-native-modal";
import { Dimensions, View, StyleSheet } from "react-native";
import ActionButton from "../buttons/action.button";
import Text from "../typography/text";
import { TransactionType } from "../../types/transaction.type";

type AddActionModalProps = {
  value: string;
  onChange: Function;
  isVisible: boolean;
  close: () => void;
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function ChooseTransactionTypeModal({
  onChange,
  isVisible,
  close,
}: AddActionModalProps) {
  const handleOnChange = (type: TransactionType) => {
    onChange(type);
    close();
  };

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
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Choose transaction</Text>
          </View>
          <View style={styles.content}>
            <ActionButton
              onPress={() => handleOnChange("expense")}
              action="expense"
              margin
            />
            <ActionButton
              onPress={() => handleOnChange("income")}
              action="income"
              margin
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
  header: {
    paddingVertical: 20,
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
  content: {
    alignItems: "flex-start",
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ChooseTransactionTypeModal;
