import { useFormContext } from "react-hook-form";
import { FormProps } from "./types";
import Typography from "../typography";
import Button from "../button";

const Form = ({ title, onSubmit, children }: FormProps) => {
  const { handleSubmit } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-full flex flex-col justify-center gap-6 mx-auto my-4 p-2 max-w-[700px]"
    >
      <Typography className="self-center" variant="header" fontWeight="bold">
        {title}
      </Typography>
      {children}

      <Button className="text-black" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
