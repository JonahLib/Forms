import * as yup from "yup";

export const FORM_SCHEMA = yup.object().shape({
  text: yup.string().min(2).required(),
  chips: yup.array().min(1),
  tac: yup.boolean(),
  date: yup.date().required(),
});

export const TEST_CHIPS = [
  { value: "1", label: "Chip 1" },
  { value: "2", label: "Chip 2" },
  { value: "3", label: "Chip 3" },
  { value: "4", label: "Chip 4" },
  { value: "5", label: "Chip 5" },
  { value: "6", label: "Chip 6" },
  { value: "7", label: "Chip 7" },
  { value: "8", label: "Chip 8" },
  { value: "9", label: "Chip 9" },
  { value: "10", label: "Chip 10" },
];
