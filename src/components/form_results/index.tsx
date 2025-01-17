/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "../typography";
import { FormResultProps } from "./types";

const FormResults = ({ data }: FormResultProps) => {
  if (!data) return null;

  const truncateValue = (value: any) => {
    const stringValue = String(value);
    return stringValue.length > 70
      ? `${stringValue.substring(0, 70)}...`
      : stringValue;
  };

  return (
    <div className="flex flex-col w-full m-auto max-w-[700px] justify-center items-center gap-2">
      <Typography>Data</Typography>
      <div className="w-full bg-gray-200 p-4 rounded-xl max-w-[700px] m-auto">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="mb-2">
            <strong>{key}:</strong> {truncateValue(value)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormResults;
