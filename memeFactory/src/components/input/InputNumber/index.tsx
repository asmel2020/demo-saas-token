import { Input } from "@/components/ui/input";
import React, { useState } from "react";
interface Props {
  disabled?: boolean;
  onChange?: (e: string /* React.ChangeEvent<HTMLInputElement> */) => void;
  decimals?: number;
  placeholder?: string;
  valueInitial?: string;
}
export const InputNumber = ({
  disabled = false,
  onChange = () => {},
  decimals = 2,
  placeholder = "",
  valueInitial = "",
}: Props) => {
  const [value, setValue] = useState(valueInitial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Expresión regular para permitir números sin más de un "0" antes del decimal
    const regex = new RegExp(`^(0|[1-9][0-9]*)([.,][0-9]{0,${decimals}})?$`);
    if (value === "" || regex.test(value)) {
      onChange(value.replace(".", ","));
      setValue(value.replace(".", ","));
    }
  };
  return (
    <Input
      id="input-number"
      name="input-number"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      className="col-span-4"
      disabled={disabled}
      value={value}
    />
  );
};
