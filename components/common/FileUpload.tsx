import Image from "next/image";
import React, { ChangeEventHandler, RefObject } from "react";

interface PropTypes {
  id: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  multiple: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  error: boolean | "" | undefined;
  errorText: string | string[] | undefined;
  previewSource: string[];
}

const FileUpload = ({
  id,
  name,
  reference,
  multiple,
  onChange,
  error,
  errorText,
  previewSource,
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
        onChange={onChange}
        accept="image/x-png,image/gif,image/jpeg"
        multiple={multiple}
      />
      {previewSource.length > 0 && (
        <div className="grid grid-cols-12 gap-6">
          {previewSource.map((source, index) => {
            return (
              <div className="col-span-2" key={index}>
                <Image
                  src={source}
                  className="my-4 rounded h-[18vh] object-cover"
                  width={200}
                  height={200}
                  alt="Loading..."
                />
              </div>
            );
          })}
        </div>
      )}
      {error && <p className="text-red-500 text-sm my-2">{errorText}</p>}
    </>
  );
};

export default FileUpload;
