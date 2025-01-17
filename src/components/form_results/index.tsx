import Typography from "../typography";
import { FormResultProps } from "./types";

const FormResults = ({ data }: FormResultProps) => {
  if (!data) return null;

  return (
    <div className="flex flex-col w-full m-auto max-w-[700px] justify-center items-center gap-2">
      <Typography>Data</Typography>
      <code className="py-2 mb-2 bg-gray-200 px-4 w-full rounded-xl max-w-[700px] m-auto">
        {JSON.stringify(data)}
      </code>
    </div>
  );
};

export default FormResults;
