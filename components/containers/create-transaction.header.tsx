import React from "react";
import { Platform, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Text from "../typography/text";
import { TransactionType } from "../../types/transaction.type";

type CreateTransactionHeaderProps = {
  close: () => void;
  value: TransactionType;
  onChange: Function;
  toggleModal: () => void;
};

function CreateTransactionHeader({
  close,
  value,
  onChange,
  toggleModal,
}: CreateTransactionHeaderProps) {
  const handleOnChange = onChange("type");
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Platform.select({ ios: 0, android: 20 }),
        marginBottom: 10,
        height: 35,
      }}
    >
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Pressable
          onPress={toggleModal}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 4,
            backgroundColor: "#4f4f4f",
            flexDirection: "row",
            borderRadius: 999,
            alignItems: "center",
          }}
        >
          <Text
            variant="subtitle"
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {value}
          </Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Pressable
          onPress={close}
          style={{
            backgroundColor: "#2e2e2e",
            padding: 4,
            borderRadius: 999,
            alignItems: "flex-end",
          }}
        >
          <Ionicons name="close" color="#f1f1f1" size={26} />
        </Pressable>
      </View>
    </View>
  );
}

export default CreateTransactionHeader;
