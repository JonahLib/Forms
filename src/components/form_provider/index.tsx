"use client";

import { useForm, FormProvider as Provider } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { FormProviderProps } from "./types";

const FormProvider = ({
  defaultValues,
  yupSchema,
  children,
}: FormProviderProps) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
    mode: "onBlur",
  });

  return <Provider {...methods}>{children}</Provider>;
};

export default FormProvider;
