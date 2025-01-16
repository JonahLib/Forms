import { ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  variant?: "header" | "subheader" | "description" | "body";
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
  colour?: string;
  className?: string;
};
