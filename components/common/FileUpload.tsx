import Image from "next/image";
import React, { ChangeEventHandler } from "react";

interface PropTypes {
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  label: string;
  error: boolean | "" | undefined;
  errorText: string | undefined;
  previewSource: string[];
}

const FileUpload = ({
  id,
  name,
  onChange,
  label,
  error,
  errorText,
  previewSource,
}: PropTypes) => {
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        name={name}
        id={id}
        type="file"
        onChange={onChange}
        accept="image/x-png,image/gif,image/jpeg"
        multiple
      />
      {previewSource.length > 0 && (
        <div className="grid grid-cols-12 gap-6">
          {previewSource.map((source, index) => {
            return (
              <div className="col-span-2" key={index}>
                <Image
                  src={source}
                  className="my-4 rounded"
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
