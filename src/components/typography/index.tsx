import React, { JSX, ReactElement } from "react";
import { TypographyProps } from "./types";

const Typography = ({
  children,
  variant = "body",
  fontWeight = "normal",
  colour = "text-black",
  className = "",
}: TypographyProps): ReactElement => {
  const variantTagMap: Record<
    NonNullable<TypographyProps["variant"]>,
    keyof JSX.IntrinsicElements
  > = {
    header: "h1",
    subheader: "h2",
    description: "p",
    body: "span",
  };

  const fontWeightClass =
    {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    }[fontWeight] || "font-normal";

  const Component = variantTagMap[variant] || "span";

  return (
    <Component className={`${colour} ${fontWeightClass} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
