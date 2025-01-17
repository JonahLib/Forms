import { useFormContext } from "react-hook-form";
import { FormProps } from "./types";
import Typography from "../typography";
import Button from "../button";

const Form = ({ title, onSubmit, children, onRest }: FormProps) => {
  const { handleSubmit, reset } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-full flex flex-col justify-center gap-6 mx-auto my-4 p-2 max-w-[700px]"
    >
      <Typography className="self-center" variant="header" fontWeight="bold">
        {title}
      </Typography>
      {children}
      <div className="w-full flex flex-col sm:flex-row gap-2 max-w-[700px]">
        <Button className="text-black w-full" type="submit">
          Submit
        </Button>
        <Button
          className="text-black w-full"
          type="submit"
          theme="secondary"
          onClick={() => {
            if (onRest) {
              onRest();
            }
            reset();
          }}
        >
          clear Form
        </Button>
      </div>
    </form>
  );
};

export default Form;
