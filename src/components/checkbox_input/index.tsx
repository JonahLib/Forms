import { useController, useFormContext } from "react-hook-form";
import { CheckboxInputProps } from "./types";
import { ChangeEvent, ReactElement } from "react";
import Typography from "@/components/typography";

const CheckboxInput = ({ name, label, onSelect }: CheckboxInputProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  const { value, onChange, onBlur } = field;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onSelect) {
      onSelect(e.target.checked);
    }
    onChange(e.target.checked);
  };

  const renderInput = (): ReactElement => {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onInputChange(e)}
        onBlur={onBlur}
        className="h-4 w-4"
      />
    );
  };

  const renderLabel = (): ReactElement => {
    return (
      <Typography variant="body" fontWeight="bold">
        {label}
      </Typography>
    );
  };

  return (
    <label className="flex items-center gap-x-2">
      {renderInput()}
      {renderLabel()}
    </label>
  );
};

export default CheckboxInput;
