import Head from "next/head";
import Image from "next/image";
import React from "react";
import BreadCrumb from "../components/common/BreadCrumb";
import Logo from "../assets/img/logo.png";
import Link from "next/link";

import TextInput from "../components/common/TextInput";

const register = () => {
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
                <form className="space-y-4 md:space-y-6" action="#">
                  <TextInput
                    id="name"
                    type="text"
                    name="name"
                    label="Name"
                    error={true}
                    errorText="Please Enter Valid Name"
                    placeholder="Muhammad Uzair"
                    onChange={undefined}
                  />
                  <TextInput
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    error={true}
                    errorText="Please Enter Valid Email"
                    placeholder="name@company.com"
                    onChange={undefined}
                  />
                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    error={true}
                    errorText="Please Enter Valid Password"
                    placeholder="••••••••"
                    onChange={undefined}
                  />
                  <button
                    type="submit"
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Register
                  </button>
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

export default register;
