import React from "react";
import { CircleAlert } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-xs text-destructive">
      <CircleAlert className="h-4 w-5" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
