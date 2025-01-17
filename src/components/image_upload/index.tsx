import React, { ReactElement, useRef } from "react";
import { ImageUploadProps } from "./types";
import Image from "next/image";
import { useController, useFormContext } from "react-hook-form";
import clsx from "clsx";
import Typography from "@/components/typography";
import { NullableReactElement } from "@/typings/utils";
import Button from "@/components/button";

const ImageUpload = ({ name, onUpload }: ImageUploadProps): ReactElement => {
  const { control, formState } = useFormContext();
  const { field } = useController({ name, control });
  const inputRef = useRef<HTMLInputElement>(null);

  const error = formState.errors[name]?.message?.toString();

  const { value, onChange } = field;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
        if (onUpload) {
          onUpload(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputClick = () => {
    inputRef.current?.click();
  };

  const renderImage = () => {
    if (!value) return null;

    return (
      <Image
        src={value}
        alt="Uploaded"
        layout="contain"
        objectFit="contain"
        className="rounded-lg shadow-lg"
        width={200}
        height={200}
      />
    );
  };

  const renderInput = (): ReactElement => {
    return (
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="mb-4"
        hidden={true}
        ref={inputRef}
      />
    );
  };

  const renderError = (): NullableReactElement => {
    if (!error) return null;

    return (
      <Typography colour="text-red-500" className="mt-3">
        {error}
      </Typography>
    );
  };

  const renderPlaceHolder = () => {
    if (value) return null;

    return (
      <Typography
        colour={clsx(error ? "text-red-500" : "text-sky-400")}
        className="py-6"
      >
        Please Upload an Image
      </Typography>
    );
  };

  const renderClearButton = () => {
    if (!value) return null;

    return <Button onClick={() => onChange(null)}>Clear</Button>;
  };

  return (
    <div className="w-full max-w-[700px] flex flex-col gap-2">
      <div
        className={clsx(
          "flex flex-col items-center p-4 border border-dashed rounded-md w-full  cursor-pointer",
          error ? "border-red-500" : "border-sky-400"
        )}
        onClick={handleInputClick}
      >
        {renderInput()}
        {renderPlaceHolder()}
        {renderImage()}
      </div>
      {renderClearButton()}
      {renderError()}
    </div>
  );
};

export default ImageUpload;
