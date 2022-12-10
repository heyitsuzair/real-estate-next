import React, { useState } from "react";
import StarRatingsSM from "../../../components/common/StarRatingsSM";
import PropertyLocation from "../../../components/common/PropertyLocation";
import ReactImageLightbox from "../../../components/common/ReactImageLightbox";
import Image from "next/image";
import Author from "../../../assets/img/author.jpg";
import Logo from "../../../assets/img/logo-og.png";

const MyProperties = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <h1 className="text-3xl mx-5 poppins font-bold my-5">My Properties</h1>
      <div className="overflow-x-auto m-4 relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Property
              </th>
              <th scope="col" className="py-3 px-6">
                Date Added
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Area
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="font-medium p-5 text-gray-900 whitespace-nowrap text-start"
              >
                <div className="flex items-start justify-start gap-4">
                  <ReactImageLightbox
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    imagesArray={[]}
                  />
                  <Image
                    src={Author}
                    onClick={() => setIsOpen(!isOpen)}
                    alt="Loading..."
                    className="h-[20vh] cursor-pointer hover:opacity-75 w-[20vw] rounded-md object-cover"
                  />
                  <div className="property-info h-[20vh] flex flex-col justify-between gap-4">
                    <span>Apple MacBook Pro</span>
                    <div className="location">
                      <PropertyLocation location="Lahore,Pakistan" />
                    </div>
                    <div className="flex">
                      <StarRatingsSM rating={4} reviews={10} />
                    </div>
                  </div>
                </div>
              </th>
              <td className="py-4 px-6 text-start">20 December,2022</td>
              <td className="py-4 px-6 text-start">Rs 2000</td>
              <td className="py-4 px-6 text-start">200 SQFT</td>
              <td className="py-4 px-6 text-start">
                <a
                  href="#"
                  className="font-medium mr-4 text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="font-medium p-5 text-gray-900 whitespace-nowrap text-start"
              >
                <div className="flex items-start justify-start gap-4">
                  <ReactImageLightbox
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    imagesArray={[]}
                  />
                  <Image
                    src={Logo}
                    onClick={() => setIsOpen(!isOpen)}
                    alt="Loading..."
                    className="h-[20vh] cursor-pointer hover:opacity-75 w-[20vw] rounded-md object-cover"
                  />
                  <div className="property-info h-[20vh] flex flex-col justify-between gap-4">
                    <span>Apple MacBook Pro</span>
                    <div className="location">
                      <PropertyLocation location="Lahore,Pakistan" />
                    </div>
                    <div className="flex">
                      <StarRatingsSM rating={4} reviews={10} />
                    </div>
                  </div>
                </div>
              </th>
              <td className="py-4 px-6 text-start">20 December,2022</td>
              <td className="py-4 px-6 text-start">Rs 2000</td>
              <td className="py-4 px-6 text-start">200 SQFT</td>
              <td className="py-4 px-6 text-start">
                <a
                  href="#"
                  className="font-medium mr-4 text-blue-600 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProperties;
