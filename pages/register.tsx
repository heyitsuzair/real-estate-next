import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import Logo from "../assets/img/logo.png";
import Link from "next/link";
import TextInput from "../components/common/TextInput";
import { useFormik } from "formik";
import { RegisterFormSchema } from "../yupSchemas";
import SpinnerSmall from "../components/common/SpinnerSmall";
import CreditCardForm from "../components/common/CreditCardForm";
import Packages from "../components/common/Packages";

const Register = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  // ?Configurations For Formik -------------------------->
  const initialValues = {
    name: "",
    phone_no: "",
    email: "",
    password: "",
    package: "",
    card_no: "",
    card_cvc: "",
    expiry_month: "",
    expiry_year: "",
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterFormSchema,
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
        <title>Register</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Register"
        />
      </Head>
      <BreadCrumb text="Register" />
      <div className="form py-40 bg-gray-50">
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
                  Create New Account
                </h1>
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
                    label="Password"
                    error={errors.password && touched.password}
                    errorText={errors.password}
                    onBlur={handleBlur}
                    placeholder="••••••••"
                    onChange={handleChange}
                  />
                  <div className="-ml-5">
                    <Packages
                      errors={errors}
                      touched={touched}
                      value={values.package}
                      handleChange={handleChange}
                    />
                  </div>

                  {values.package && (
                    <CreditCardForm
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  )}
                  {isLoading ? (
                    <div className="text-center">
                      <SpinnerSmall />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Register
                    </button>
                  )}

                  <p className="text-sm font-light text-center text-gray-500">
                    Already Have An Account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-red-600 hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
