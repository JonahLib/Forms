import { ReactNode } from "react";

export type FormProps = {
  title: string;
  onSubmit: (data: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  children: ReactNode;
};
