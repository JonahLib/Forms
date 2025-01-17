export type TextInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "date";
  disabled?: boolean;
  hint?: string;
  className?: string;
};
