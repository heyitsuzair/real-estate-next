import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Sidebar from "../../components/common/Sidebar";
import AddProperty from "./subcomponents/AddProperty";
import MyProperties from "./subcomponents/MyProperties";
import Package from "./subcomponents/Package";
import Settings from "./subcomponents/Settings";

const Index = () => {
  const router = useRouter();

  /**
   * Protected Route
   */
  useEffect(() => {
    if (!localStorage.getItem("re-user")) {
      router.push("/login");
      toast.warn("Login To Access Dashboard!", {
        position: "bottom-center",
      });
      return;
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          {router.query.route === "myProperties" && <MyProperties />}
          {router.query.route === "settings" && <Settings />}
          {router.query.route === "addProperties" && <AddProperty />}
          {router.query.route === "package" && <Package />}
        </div>
      </div>
    </div>
  );
};

export default Index;
