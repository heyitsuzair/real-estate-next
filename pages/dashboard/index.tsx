import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "../../components/common/Sidebar";
import MyProperties from "./subcomponents/MyProperties";
import Settings from "./subcomponents/Settings";

const Index = () => {
  const router = useRouter();

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
        </div>
      </div>
    </div>
  );
};

export default Index;
