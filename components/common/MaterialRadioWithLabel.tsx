import { Radio } from "@material-tailwind/react";
import React, { ChangeEventHandler } from "react";

interface PropTypes {
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
  checked: boolean;
  label: string;
}

const MaterialRadioWithLabel = ({
  handleChange,
  value,
  name,
  checked,
  label,
}: PropTypes) => {
  return (
    <div className="flex items-center">
      <Radio
        onChange={handleChange}
        value={value}
        name={name}
        defaultChecked={checked}
        color="red"
        label={label}
        id={value}
        labelProps={{
          style: {
            fontWeight: "500",
          },
        }}
      />
    </div>
  );
};

export default MaterialRadioWithLabel;
