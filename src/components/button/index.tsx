import { ReactElement } from "react";
import clsx from "clsx";
import Link from "next/link";
import { ButtonProps } from "./types";

const Button = ({
  onClick,
  children,
  className,
  theme = "primary",
  link,
  type,
}: ButtonProps): ReactElement => {
  const buttonClass = clsx(
    "py-2 px-4 rounded-md shadow-md font-bold",
    {
      "bg-sky-400 text-white hover:bg-sky-300 active:bg-sky-500":
        theme === "primary",
      "bg-white hover:bg-gray-100 active:bg-gray-200 text-black border border-black":
        theme === "secondary",
    },
    className
  );

  if (link) {
    return (
      <Link href={link} passHref className={buttonClass} target="_blank">
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass} type={type}>
      {children}
    </button>
  );
};

export default Button;
