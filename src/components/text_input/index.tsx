import { useController, useFormContext } from "react-hook-form";
import { TextInputProps } from "./types";
import Typography from "@/components/typography";
import { NullableReactElement } from "@/typings/utils";
import { shouldRenderHint } from "./helpers";
import clsx from "clsx";
import { ChangeEvent } from "react";

const TextInput = ({
  name,
  label,
  placeholder = "",
  className = "",
  disabled,
  hint,
  type = "text",
}: TextInputProps) => {
  const { control, formState } = useFormContext();
  const { field } = useController({ name, control });

  const error = formState.errors[name]?.message?.toString();
  const { value, onChange, onBlur } = field;

  const renderLabel = (): NullableReactElement => {
    if (!label) return null;
    return (
      <label htmlFor={name} className="text-black font-bold">
        {label}
      </label>
    );
  };

  const renderError = (): NullableReactElement => {
    if (!error) return null;
    return (
      <Typography colour="text-red-500" className="mt-1">
        {error}
      </Typography>
    );
  };

  const renderHint = (): NullableReactElement => {
    if (!shouldRenderHint(error, hint)) return null;
    return (
      <Typography colour="text-grey-400" className="mt-2">
        {hint}
      </Typography>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {renderLabel()}
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onBlur={onBlur}
        disabled={disabled}
        data-testid={`${name}-input`}
        type={type}
        className={clsx(
          `rounded-lg h-[48px] border p-[12px] font-normal text-black text-base bg-gray-50 w-full focus:outline-none ${className}`,
          error ? "border-red-500" : "border-gray-100"
        )}
      />
      {renderError()}
      {renderHint()}
    </div>
  );
};

export default TextInput;
