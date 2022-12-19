import React, { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import { AddReviewFormSchema } from "../../yupSchemas";
import { toast } from "react-toastify";
import SpinnerSmall from "./SpinnerSmall";
import { submitReview } from "../../functions/review";

const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const AddReviewForm = ({
  propertyId,
  setIsCommentAdded,
}: {
  propertyId: string;
  setIsCommentAdded?: (obj: any) => void;
}) => {
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
    onSubmit: async (values, action) => {
      setIsLoading(true);

      const isReviewAdded = await submitReview(values, propertyId);

      /**
       * If API Returns Any Error, Show It In Toast Else Show Success Message In Toast
       */
      if (isReviewAdded.error) {
        toast.error(isReviewAdded.msg);
        setIsLoading(false);
        return;
      }
      /**
       * Set Is Comment Added To True So Component Will Remount And Will Fetch New Ratings
       */
      if (typeof setIsCommentAdded !== "undefined") {
        setIsCommentAdded(true);
      }

      toast.success(isReviewAdded.msg, {
        position: "bottom-center",
      });
      setIsLoading(false);
      action.resetForm();
    },
  });
  // !Configurations For Formik -------------------------->
  return (
    <div className="bg-slate-100 rounded-md p-10">
      <h1 className="text-xl font-semibold">Add A Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center md:gap-3">
          <h1 className="font-semibold my-5 flex items-center gap-3">
            <span className="mt-1">Your Ratings:</span>
            <div className="mt-0.5">
              <StarRatings
                rating={values.stars}
                starRatedColor="red"
                changeRating={handleChangeRating}
                numberOfStars={5}
                name="stars"
                starDimension="20px"
                starSpacing="2px"
              />
            </div>
          </h1>
          {errors.stars && touched.stars && (
            <p className="text-red-500 text-sm">{errors.stars}</p>
          )}
        </div>
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
