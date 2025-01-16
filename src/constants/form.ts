import * as yup from "yup";

export const FORM_SCHEMA = yup.object().shape({
  brandName: yup.string().min(2).required(),
  brandDescription: yup.string().required(),
  ccgs: yup.string().required(),
  cats: yup.array().min(1),
  tac: yup.boolean(),
});

export const TEST_CHIPS = [
  { value: "1", label: "Health & Wellness" },
  { value: "2", label: "Outdoor Adventures" },
  { value: "3", label: "Culinary Delights" },
  { value: "4", label: "Tech & Gadgets" },
  { value: "5", label: "Fitness & Training" },
  { value: "6", label: "Travel & Leisure" },
  { value: "7", label: "Arts & Culture" },
  { value: "8", label: "Education & Learning" },
  { value: "9", label: "Fashion & Style" },
  { value: "10", label: "Entertainment & Media" },
];
