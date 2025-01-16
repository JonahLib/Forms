import { useController, useFormContext } from "react-hook-form";
import { DropdownInputProps, option } from "./types";

import { useState } from "react";
import clsx from "clsx";

import useClickOutside from "@/hooks/use_click_outside";
import Image from "next/image";
import Typography from "@/components/typography";

const DropdownInput = ({ name, label, options }: DropdownInputProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  const { value, onChange } = field;
  const [showMenu, setShowMenu] = useState(false);
  const ref = useClickOutside(() => setShowMenu(false));

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleOptionClick = (option: option) => {
    onChange({ target: { value: option.value } });
    toggleMenu();
  };

  const renderLabel = () => {
    return (
      <label>
        <Typography>{label}</Typography>
      </label>
    );
  };

  const renderArrowIcon = () => {
    return (
      <div className={clsx("ml-auto transition", showMenu ? "rotate-180" : "")}>
        <Image src="arrow.svg" alt="dropdown-arrow" height={24} width={24} />
      </div>
    );
  };

  const renderOptions = () => {
    if (!showMenu) return null;

    return (
      <div
        ref={ref}
        className="absolute w-full max-h-[362px] overflow-auto rounded-xl bg-white border border-neutral-200 z-[99] flex flex-col p-3 mt-2 gap-2"
      >
        {mapOptions(options)}
      </div>
    );
  };

  const mapOptions = (optionsToMap: option[]) => {
    return optionsToMap.map((option: option) => (
      <span
        key={option.name}
        className="py-4 px-[12px] cursor-pointer hover:bg-neutral-100 rounded-xl"
        onClick={() => handleOptionClick(option)}
        data-testid="option"
      >
        <Typography>{option.name}</Typography>
      </span>
    ));
  };

  const renderInput = () => {
    return (
      <div
        className="w-full py-[14px] px-[12px] flex items-center rounded-md bg-white border border-neutral-300 cursor-pointer"
        onClick={toggleMenu}
        data-testid="inputSelect"
      >
        <Typography>{value}</Typography>
        {renderArrowIcon()}
      </div>
    );
  };

  return (
    <div className="relative">
      {renderLabel()}
      {renderInput()}
      {renderOptions()}
    </div>
  );
};

export default DropdownInput;
