import React, { useState } from "react";
import { Platform, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Text from "../../typography/text";
import { FormInput } from "./title.input";
import { DateUtility } from "../../../utilities/date.utility";

function DatePickerInput(props: FormInput) {
  const [isVisible, setIsVisible] = useState(false);

  const dateUnix = props.values[props.name];

  const showDatePicker = () => setIsVisible(true);
  const hideDatePicker = () => setIsVisible(false);

  const handleOnChange = props.onChange(props.name);

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    handleOnChange(DateUtility.formatToStorableDate(date));
  };

  return (
    <>
      <Pressable onPress={showDatePicker} style={{ alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: 22,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: "#464646",
            paddingVertical: 2,
            paddingHorizontal: 8,
          }}
        >
          <Ionicons name="calendar" color="#F1F1F1" size={22} />
          <Text variant="subtitle" style={{ marginLeft: 10 }}>
            {DateUtility.formatToReadableDate(dateUnix)}
          </Text>
        </View>
      </Pressable>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        date={DateUtility.toDate(dateUnix)}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display={Platform.select({ ios: "inline", android: undefined })}
      />
    </>
  );
}

export default DatePickerInput;
