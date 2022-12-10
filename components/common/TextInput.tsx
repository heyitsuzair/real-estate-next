import React, { ChangeEventHandler, FocusEventHandler } from "react";

interface PropTypes {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  label: string;
  error: boolean | string | undefined;
  errorText: boolean | string | undefined;
  value: string;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
}

const TextInput = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  label,
  error,
  errorText,
  value,
  onBlur,
}: PropTypes) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        onBlur={onBlur}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 ring-red-500 focus:outline-red-500"
      />
      {error && <p className="text-red-500 text-sm my-2">{errorText}</p>}
    </div>
  );
};

export default TextInput;
