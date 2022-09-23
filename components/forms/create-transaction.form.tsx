import { StyleSheet, View } from "react-native";
import { TransactionType } from "../../types/transaction.type";
import { Formik } from "formik";
import { createTransactionSchema } from "../../schemas/create-transaction.schema";
import Button from "../buttons/button";
import DatePickerInput from "./inputs/date-picker.input";
import AmountInput from "./inputs/amount.input";
import AddNoteContainer from "../containers/add-note.container";
import CategorySelect from "./selects/category.select";
import TitleInput from "./inputs/title.input";
import CreateTransactionHeader from "../containers/create-transaction.header";
import ChooseTransactionTypeModal from "../modals/choose-transaction-type.modal";
import { useState } from "react";

export type FormState = {
  category?: string;
  date: string;
  amount: number;
  note?: string;
  title: string;
  type: TransactionType;
  cardId?: string;
};

type CreateTransactionFormProps = {
  initialValues: FormState;
  close: () => void;
};

function CreateTransactionForm({
  initialValues,
  close,
}: CreateTransactionFormProps) {
  const [actionModalVisible, set] = useState(false);

  const closeModal = () => set(false);
  const toggleModal = () => set((prev) => !prev);

  return (
    <>
      <Formik
        validationSchema={createTransactionSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <CreateTransactionHeader
              close={close}
              value={values["type"]}
              onChange={handleChange}
              toggleModal={toggleModal}
            />
            <View style={styles.formContainer}>
              <View style={{ alignItems: "center" }}>
                <TitleInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  values={values}
                  name="title"
                />
                <DatePickerInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  values={values}
                  name="date"
                />
                <AmountInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  values={values}
                  name="amount"
                />
              </View>

              <CategorySelect
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                values={values}
                name="category"
              />

              <AddNoteContainer
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                values={values}
                name="note"
              />

              <Button
                text="Save"
                onPress={() => {
                  handleSubmit();
                  close();
                }}
                style={{ paddingVertical: 10 }}
                buttonStyle={{ width: "100%" }}
              />
            </View>
            <ChooseTransactionTypeModal
              onChange={handleChange("type")}
              value={values["type"]}
              isVisible={actionModalVisible}
              close={closeModal}
            />
          </>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});

export default CreateTransactionForm;
