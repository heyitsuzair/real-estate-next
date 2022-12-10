import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-100" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 h-screen rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard?route=myProperties"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <i className="fa fa-house" aria-hidden="true"></i>
              <span className="ml-3 text-sm">My Properties</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-red-600 bg-red-200 rounded-full dark:bg-red-900 dark:text-red-200">
                3
              </span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Add Properties
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <i className="fa fa-gear" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Settings
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <i className="fa fa-lock" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Change Password
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
