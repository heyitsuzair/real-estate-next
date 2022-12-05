import React from "react";
import { Select, Option } from "@material-tailwind/react";

interface Select {
  value: string;
  text: string;
}
const MaterialSelect = ({
  variant,
  color,
  size,
  label,
  options,
  change,
  disabled,
}: any) => {
  return (
    <div className="w-full">
      <Select
        variant={variant}
        color={color}
        size={size}
        label={label}
        onChange={(e) => change(e)}
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
    </div>
  );
};

export default MaterialSelect;
