import { View, TextInput } from "react-native";
import { FormikErrors, FormikValues } from "formik";
import { FormState } from "../create-transaction.form";

export type FormInput = {
  onChange: Function;
  onBlur: Function;
  errors: FormikErrors<FormState>;
  values: FormikValues;
  name: "category" | "date" | "amount" | "note" | "title" | "type" | "cardId";
};

function TitleInput(props: FormInput) {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <TextInput
        placeholder="New Transaction"
        placeholderTextColor="#A1A1A1"
        value={props.values[props.name]}
        onChangeText={props.onChange(props.name)}
        onBlur={props.onBlur(props.name)}
        selectTextOnFocus
        style={{
          fontSize: 26,
          textAlign: "center",
          padding: 4,
          color: "#F1F1F1",
        }}
      />
    </View>
  );
}

export default TitleInput;
