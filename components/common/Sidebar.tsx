import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { logoutUser } from "../../functions";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="fixed" aria-label="Sidebar" style={{ width: "16%" }}>
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 h-screen rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard?route=myProperties"
              className={`flex items-center p-2 text-base font-normal rounded-lg  ${
                router.query.route === "myProperties"
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <i className="fa fa-house" aria-hidden="true"></i>
              <span className="ml-3 text-sm">My Properties</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard?route=addProperties"
              className={`flex items-center p-2 text-base font-normal rounded-lg  ${
                router.query.route === "addProperties"
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Add Properties
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard?route=reviews"
              className={`flex items-center p-2 text-base font-normal rounded-lg  ${
                router.query.route === "reviews"
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <i className="fa fa-star" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Reviews
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard?route=package"
              className={`flex items-center p-2 text-base font-normal rounded-lg  ${
                router.query.route === "package"
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Package
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard?route=settings"
              className={`flex items-center p-2 text-base font-normal rounded-lg  ${
                router.query.route === "settings"
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              }`}
            >
              <i className="fa fa-gear" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Settings
              </span>
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                router.push("/");
                logoutUser();
              }}
              className={`flex cursor-pointer items-center p-2 text-base font-normal rounded-lg  hover:bg-gray-100 text-gray-900`}
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Logout
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
