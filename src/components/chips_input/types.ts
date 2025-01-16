export type option = { value: string; label: string };

export type ChipsInputProps = {
  title?: string;
  description?: string;
  name: string;
  options?: option[];
  maxSelect?: number;
};
