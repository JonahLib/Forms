import Typography from "@/components/typography";
import { RadioInputProps } from "./types";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { NullableReactElement } from "@/typings/utils";

const RadioInput = ({
  name,
  title,
  options,
  className,
}: RadioInputProps): ReactElement => {
  const { register, formState } = useFormContext();

  const error = formState.errors[name]?.message?.toString();

  const renderTitle = (): ReactElement => {
    return (
      <Typography fontWeight="bold" colour="text-black">
        {title}
      </Typography>
    );
  };

  const renderInputs = () => {
    return options.map((option, index) => {
      return (
        <li key={index} className="flex gap-2">
          <input
            type="radio"
            value={option.value}
            id={`${name}-${option.value}`}
            {...register(name)}
            className="form-radio"
          />
          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </li>
      );
    });
  };

  const renderError = (): NullableReactElement => {
    if (!error) return null;

    return <Typography colour="text-red-500">{error}</Typography>;
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {renderTitle()}
      <ul className="flex gap-5 flex-wrap">{renderInputs()}</ul>
      {renderError()}
    </div>
  );
};

export default RadioInput;
