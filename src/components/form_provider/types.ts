import * as yup from "yup";

import { ReactNode } from "react";

export type FormProviderProps = {
  defaultValues: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  yupSchema: yup.ObjectSchema<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  children: ReactNode;
};
