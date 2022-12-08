import { Checkbox } from "@material-tailwind/react";
import React, { ChangeEventHandler } from "react";

interface PropTypes {
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
  id: string;
  checked: boolean;
}

const MaterialCheckbox = ({
  handleChange,
  value,
  name,
  id,
  checked,
}: PropTypes) => {
  return (
    <div className="flex items-center">
      <Checkbox
        onChange={handleChange}
        value={value}
        name={name}
        defaultChecked={checked}
        color="red"
        id={id}
      />
      <label htmlFor={id} className="text-slate-500 cursor-pointer">
        {value}
      </label>
    </div>
  );
};

export default MaterialCheckbox;
