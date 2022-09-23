import React from "react";
import Modal from "react-native-modal";
import { Dimensions, View, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type ChooseCardModalProps = {
  isVisible: boolean;
  close: () => void;
  onChange: Function;
};

function ChooseCardModal({ isVisible, close, onChange }: ChooseCardModalProps) {
  return (
    <Modal
      deviceHeight={height}
      deviceWidth={width}
      style={{ margin: 0 }}
      isVisible={isVisible}
      swipeDirection={["down", "up"]}
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
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
  },
  actionSheetOverlay: {
    height: 400,
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
});

export default ChooseCardModal;
