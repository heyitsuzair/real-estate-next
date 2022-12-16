import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import Logo from "../assets/img/logo.png";
import SpinnerSmall from "../components/common/SpinnerSmall";
import { NewPasswordSchema } from "../yupSchemas";
import TextInput from "../components/common/TextInput";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { newPassword } from "../functions";
import { toast } from "react-toastify";

const New_Password = () => {
  // ?State For Loading ---------------------------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading ---------------------------->

  const router = useRouter();

  // ?Configurations For Formik -------------------------->
  const initialValues = {
    password: "",
    confirm_password: "",
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: NewPasswordSchema,
      onSubmit: async (values, action) => {
        setIsLoading(true);

        const email: string | string[] | undefined = router.query.email;
        const token: string | string[] | undefined = router.query.token;
        const password: string = values.password;

        const isPasswordChanged = await newPassword(email, token, password);

        /**
         * If URL Is Changed By Spam, Show An Alert And Push It To Home Else Navigate To Login
         */
        if (isPasswordChanged.error) {
          toast.error(isPasswordChanged.msg, {
            position: "top-right",
          });
          router.push("/");
          return;
        }

        toast.success(isPasswordChanged.msg);
        router.push("/login");
      },
    });
  // !Configurations For Formik -------------------------->

  /**
   * Protected Route
   */
  useEffect(() => {
    if (localStorage.getItem("re-user")) {
      router.push("/");
    }
    /**
     * Push To Home If Email Or Token Is Not Present In URL Query
     */
    if (router.isReady) {
      if (!router.query.email || !router.query.token) {
        router.push("/");
      }
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Head>
        <title>Set New Password</title>
        <meta
          name="description"
          content="Real Estate Site My Muhammad Uzair. Set New Password"
        />
      </Head>
      <BreadCrumb text="Set New Password" />
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
                  Set New Password
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    value={values.password}
                    error={errors.password && touched.password}
                    errorText={errors.password}
                    onBlur={handleBlur}
                    placeholder="••••••••"
                    onChange={handleChange}
                  />
                  <TextInput
                    id="confirm_password"
                    type="password"
                    name="confirm_password"
                    label="Confirm Password"
                    value={values.confirm_password}
                    error={errors.confirm_password && touched.confirm_password}
                    errorText={errors.confirm_password}
                    onBlur={handleBlur}
                    placeholder="••••••••"
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
                      Continue
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

export default New_Password;
