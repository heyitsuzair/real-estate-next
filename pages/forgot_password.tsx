import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import Logo from "../assets/img/logo.png";
import SpinnerSmall from "../components/common/SpinnerSmall";
import { ForgotPasswordSchema } from "../yupSchemas";
import TextInput from "../components/common/TextInput";
import { useFormik } from "formik";

const Forgot_Password = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?Configurations For Formik -------------------------->
  const initialValues = {
    email: "",
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ForgotPasswordSchema,
      onSubmit: (values, action) => {
        setIsLoading(true);
        console.log(values);
        setTimeout(() => {
          setIsLoading(false);
          action.resetForm();
        }, 2000);
      },
    });
  // !Configurations For Formik -------------------------->

  return (
    <div>
      <Head>
        <title>Forgot Password</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Forgot Password"
        />
      </Head>
      <BreadCrumb text="Forgot Password" />
      <div className="form py-20 pb-52 bg-gray-50">
        <section>
          <div className="flex flex-col items-center justify-start px-6 mx-auto">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
            >
              <Image alt="Loading..." src={Logo} />
            </a>
            <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Forgot Password
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                  action="#"
                >
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

                  {isLoading ? (
                    <div className="text-center">
                      <SpinnerSmall />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Send Email
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Forgot_Password;
