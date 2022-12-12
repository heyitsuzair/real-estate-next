import React from "react";
import { Select, Option } from "@material-tailwind/react";

interface Select {
  value: string;
  text: string;
}
const MaterialSelectWithValidation = ({
  variant,
  color,
  value,
  size,
  label,
  options,
  disabled,
  onChange,
  error,
  errorText,
}: any) => {
  return (
    <div className="w-full">
      <Select
        variant={variant}
        color={color}
        className="bg-gray-50 text-gray-900"
        value={value}
        size={size}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option: Select) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          );
        })}
      </Select>
      {error && <p className="text-red-500 text-sm my-2">{errorText}</p>}
    </div>
  );
};

export default MaterialSelectWithValidation;
