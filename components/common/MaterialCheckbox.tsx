import { Checkbox } from "@material-tailwind/react";
import React, { ChangeEventHandler } from "react";

interface PropTypes {
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
  checked: boolean;
}

const MaterialCheckbox = ({
  handleChange,
  value,
  name,
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
        label={value}
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

export default MaterialCheckbox;
