import React, { useEffect, useState } from "react";
import TextInput from "../../../components/common/TextInput";
import { useFormik } from "formik";
import SpinnerSmall from "../../../components/common/SpinnerSmall";
import { SettingsSchema } from "../../../yupSchemas";
import { fetchUserProfile } from "../../../functions";
import SpinnerLarge from "../../../components/common/SpinnerLarge";

const Settings = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?Configurations For Formik -------------------------->
  const initialValues = {
    name: "",
    email: "",
    phone_no: "",
    password: "",
  };

  const {
    values,
    touched,
    errors,
    handleBlur,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SettingsSchema,
    onSubmit: (values, action) => {
      setIsLoading(true);
      console.log(values);
      setTimeout(() => {
        setIsLoading(false);
        setFieldValue("password", "");
      }, 2000);
    },
  });
  // !Configurations For Formik -------------------------->

  // ?Fetching User Profile From Backend --------->
  const fetchProfile = async () => {
    const userProfile = await fetchUserProfile();

    /**
     * Setting Fields Value
     * */
    setFieldValue("name", userProfile.name);
    setFieldValue("email", userProfile.email);
    setFieldValue("phone_no", userProfile.phone_no);
  };
  // !Fetching User Profile From Backend --------->

  useEffect(() => {
    fetchProfile();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-3xl mx-5 poppins font-bold my-5">Settings</h1>

      <div className="m-4 shadow-xl sm:rounded-lg p-10">
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit}
          action="#"
        >
          <TextInput
            id="name"
            type="text"
            name="name"
            label="Full Name"
            value={values.name}
            error={errors.name && touched.name}
            errorText={errors.name}
            onBlur={handleBlur}
            placeholder="Muhammad Uzair"
            onChange={handleChange}
          />
          <TextInput
            id="phone_no"
            type="text"
            name="phone_no"
            label="Phone No (e.g: 03104864156)"
            value={values.phone_no}
            error={errors.phone_no && touched.phone_no}
            errorText={errors.phone_no}
            onBlur={handleBlur}
            placeholder="03104864150"
            onChange={handleChange}
          />
          <TextInput
            id="email"
            type="email"
            name="email"
            label="Email"
            value={values.email}
            error={errors.email && touched.email}
            errorText={errors.email}
            onBlur={handleBlur}
            placeholder="name@company.com"
            onChange={handleChange}
          />
          <TextInput
            id="password"
            type="password"
            name="password"
            value={values.password}
            label="Password (Leave Blank To Leave Unchanged)"
            error={errors.password && touched.password}
            errorText={errors.password}
            onBlur={handleBlur}
            placeholder="••••••••"
            onChange={handleChange}
          />
          {isLoading ? (
            <div className="text-start">
              <SpinnerSmall />
            </div>
          ) : (
            <button
              type="submit"
              className="text-white bg-red-500 hover:bg-red-600  focus:outline-none font-medium rounded-lg text-sm px-8 py-2.5 text-center "
            >
              Save
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Settings;
