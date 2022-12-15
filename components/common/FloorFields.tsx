import { Button } from "@material-tailwind/react";
import React, { ChangeEvent, useRef } from "react";
import SketchUpload from "./SketchUpload";
import TextInput from "./TextInput";

interface PropTypes {
  index: number;
  values: any;
  isNotErrorEmpty: boolean;
  isNotTouchedEmpty: boolean;
  errors: any;
  touched: any;
  handleBlur: (obj: any) => void;
  handleChange: (obj: any) => void;
  handleChangeFloorMedia: any;
}

const FloorFields = ({
  index,
  values,
  isNotErrorEmpty,
  isNotTouchedEmpty,
  errors,
  handleBlur,
  handleChange,
  handleChangeFloorMedia,
}: PropTypes) => {
  // ?Floor Media Ref --------------->
  const floorMediaRef = useRef<HTMLInputElement>(null);
  // !Floor Media Ref --------------->

  return (
    <div className="grid grid-cols-12 gap-4 items-start justify-between">
      <div className="floor-heading col-span-3">
        <TextInput
          id="property_floor_heading"
          type="text"
          name={`property_floors[${index}].floor_heading`}
          label="Floor Heading*"
          value={values.property_floors[index].floor_heading}
          error={
            isNotErrorEmpty &&
            isNotTouchedEmpty &&
            errors.property_floors[index].floor_heading
          }
          errorText={
            isNotErrorEmpty && errors.property_floors[index].floor_heading
          }
          onBlur={handleBlur}
          placeholder="Floor Heading"
          onChange={handleChange}
        />
      </div>
      <div className="floor-description col-span-6">
        <TextInput
          id="property_floor_description"
          type="text"
          name={`property_floors[${index}].floor_description`}
          label="Floor Description*"
          value={values.property_floors[index].floor_description}
          error={
            isNotErrorEmpty &&
            isNotTouchedEmpty &&
            errors.property_floors[index].floor_description
          }
          errorText={
            isNotErrorEmpty && errors.property_floors[index].floor_description
          }
          onBlur={handleBlur}
          placeholder="Floor Description"
          onChange={handleChange}
        />
      </div>
      <div className="floor-media col-span-3">
        <label
          htmlFor=""
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          File
        </label>
        {values.property_floors[index].floor_media ? (
          <Button size="md" disabled className="poppins w-full" color="green">
            Sketch Uploaded
          </Button>
        ) : (
          <Button
            size="md"
            className="poppins w-full"
            onClick={() => floorMediaRef.current?.click()}
          >
            Upload Sketch
          </Button>
        )}

        <SketchUpload
          id={`property_floors[${index}].floor_media`}
          name={`property_floors[${index}].floor_media`}
          reference={floorMediaRef}
          index={index}
          multiple={false}
          onChange={handleChangeFloorMedia}
          error={
            isNotErrorEmpty &&
            isNotTouchedEmpty &&
            errors.property_floors[index].floor_media
          }
          errorText={
            isNotErrorEmpty && errors.property_floors[index].floor_media
          }
        />
      </div>
    </div>
  );
};

export default FloorFields;
