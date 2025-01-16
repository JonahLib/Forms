import { useController, useFormContext } from "react-hook-form";
import { ChipsInputProps, option } from "./types";
import { ReactElement } from "react";
import { Nullable, NullableReactElement } from "@/typings/utils";
import clsx from "clsx";
import Typography from "@/components/typography";

const ChipsInput = ({
  title,
  description,
  name,
  options,
  maxSelect,
}: ChipsInputProps) => {
  const { control, formState } = useFormContext();
  const { field } = useController({ name, control });

  const error = formState.errors[name]?.message;

  const { value, onChange, onBlur } = field;

  const onChipSelect = (option: option): Nullable<void> => {
    const isSelected = value.includes(option.value);

    if (isSelected)
      return onChange(
        value.filter((selectedValue: string) => selectedValue !== option.value)
      );

    if (!maxSelect || value.length < maxSelect)
      return onChange([...value, option.value]);

    return null;
  };

  const renderTitle = (): NullableReactElement => {
    if (!title) return null;

    return <Typography fontWeight="bold">{title}</Typography>;
  };

  const renderDescription = (): NullableReactElement => {
    if (!description) return null;

    return <Typography colour="text-gray-400">{description}</Typography>;
  };

  const renderError = (): NullableReactElement => {
    if (!error) return null;

    return (
      <Typography colour="text-red-500" className="mt-3">
        {error.toString()}
      </Typography>
    );
  };

  const renderChips = (): Nullable<ReactElement[]> => {
    if (!options) return null;

    return options.map((option) => {
      const isSelected = value.includes(option.value);

      return (
        <button
          key={option.value}
          onClick={() => onChipSelect(option)}
          onBlur={onBlur}
          className={clsx(
            "rounded-2xl px-4 py-1 my-1 text-black bg-white-300",
            isSelected ? "border border-sky-400" : "border border-neutral-200"
          )}
        >
          {option.label}
        </button>
      );
    });
  };

  return (
    <div>
      <div className="flex flex-col">
        {renderTitle()}
        {renderDescription()}
      </div>
      <div className="flex flex-wrap gap-x-4 mt-4">{renderChips()}</div>
      {renderError()}
    </div>
  );
};

export default ChipsInput;
