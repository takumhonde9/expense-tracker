import { TextInput, View } from "react-native";
import { TransactionType } from "../types/transaction.type";
import { Formik } from "formik";
import { createTransactionSchema } from "../schemas/create-transaction.schema";

type FormState = {
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
};

function CreateTransactionForm({ initialValues }: CreateTransactionFormProps) {
  return (
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
        <View>
          <TextInput />
        </View>
      )}
    </Formik>
  );
}

export default CreateTransactionForm;
