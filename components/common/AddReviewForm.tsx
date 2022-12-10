import React, { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import { AddReviewFormSchema } from "../../yupSchemas";
import { toast } from "react-toastify";
import SpinnerSmall from "./SpinnerSmall";

const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const AddReviewForm = ({ propertyId }: { propertyId: number }) => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?Configurations For Formik -------------------------->
  const initialValues = {
    msg: "",
    name: "",
    email: "",
    website: "",
    stars: 0,
  };

  const handleChangeRating = (newRating: number) => {
    setFieldValue("stars", newRating);
  };

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: AddReviewFormSchema,
    onSubmit: (values, action) => {
      setIsLoading(true);

      setTimeout(() => {
        toast.success("Review Added!", {
          position: "bottom-center",
        });
        setIsLoading(false);
        action.resetForm();
      }, 2000);
    },
  });
  // !Configurations For Formik -------------------------->
  return (
    <div className="bg-slate-100 rounded-md p-10">
      <h1 className="text-xl font-semibold">Add A Review</h1>
      <form onSubmit={handleSubmit}>
        <h1 className="font-semibold my-5 flex items-center gap-3">
          <span className="mt-1">Your Ratings:</span>
          <StarRatings
            rating={values.stars}
            starRatedColor="red"
            changeRating={handleChangeRating}
            numberOfStars={5}
            name="stars"
            starDimension="20px"
            starSpacing="2px"
          />
          {errors.stars && touched.stars && (
            <p className="text-red-500 text-sm">{errors.stars}</p>
          )}
        </h1>
        <div className="my-5">
          <Textarea
            name="msg"
            onChange={handleChange}
            value={values.msg}
            onBlur={handleBlur}
            label="Message"
            color="red"
          />
          {errors.msg && touched.msg && (
            <p className="text-red-500 text-sm">{errors.msg}</p>
          )}
        </div>
        <div className="my-5">
          <Input
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Name"
            color="red"
            type={"text"}
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        <div className="my-5">
          <Input
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Email"
            color="red"
            type={"email"}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="my-5">
          <Input
            name="website"
            value={values.website}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Website"
            color="red"
            type={"text"}
          />
          {errors.website && touched.website && (
            <p className="text-red-500 text-sm">{errors.website}</p>
          )}
        </div>
        <div className="my-5">
          {isLoading ? (
            <SpinnerSmall />
          ) : (
            <Button
              type="submit"
              size="md"
              className="tracking-widest w-92"
              color="red"
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
