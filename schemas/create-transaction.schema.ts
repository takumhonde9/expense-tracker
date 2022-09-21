import * as yup from "yup";

export const createTransactionSchema = yup.object().shape({
  category: yup.string(),
  date: yup.string().required("Date is required"),
  amount: yup.number().moreThan(0, "Amount must be greater than zero."),
  note: yup.string(),
  title: yup.string().required("Title must be provided"),
  type: yup.string().oneOf(["expense", "income"]),
  cardId: yup.string(),
});
