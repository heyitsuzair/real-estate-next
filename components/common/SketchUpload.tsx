import Image from "next/image";
import React, { ChangeEventHandler, RefObject } from "react";

interface PropTypes {
  id: string;
  name: string;
  index: number;
  reference: RefObject<HTMLInputElement>;
  multiple: boolean;
  onChange: any;
  error: boolean | "" | undefined;
  errorText: string | string[] | undefined;
}

const SketchUpload = ({
  id,
  name,
  index,
  reference,
  multiple,
  onChange,
  error,
  errorText,
}: PropTypes) => {
  return (
    <>
      <input
        className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        name={name}
        id={id}
        type="file"
        ref={reference}
        hidden
        onChange={(e) => onChange(e, index)}
        accept="image/x-png,image/gif,image/jpeg"
        multiple={multiple}
      />
      {error && <p className="text-red-500 text-sm my-2">{errorText}</p>}
    </>
  );
};

export default SketchUpload;
