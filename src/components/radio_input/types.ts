export type option = { value: string; label: string };

export type RadioInputProps = {
  name: string;
  title: string;
  options: option[];
  className?: string;
};
