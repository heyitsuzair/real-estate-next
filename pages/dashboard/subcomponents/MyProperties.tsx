import React, { useEffect, useState } from "react";
import StarRatingsSM from "../../../components/common/StarRatingsSM";
import PropertyLocation from "../../../components/common/PropertyLocation";
import ReactImageLightbox from "../../../components/common/ReactImageLightbox";
import Image from "next/image";
import { deleteProperty, fetchSellerProperties } from "../../../functions";
import { toast } from "react-toastify";
import SpinnerLarge from "../../../components/common/SpinnerLarge";

const MyProperties = () => {
  // ?States For Lightbox -------------->
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lightBoxImages, setLightBoxImages] = useState<string[]>([]);
  // !States For Lightbox -------------->

  // ?State For Loading -------->
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // !State For Loading -------->

  const [properties, setProperties] = useState([]);

  const getSellerProperties = async () => {
    const data = await fetchSellerProperties();
    setProperties(data);
  };

  /**
   * Handle When Someone Clicks On Select Property
   */
  const onDeleteProperty = async (propertyId: string) => {
    setIsLoading(true);
    const isPropertyDeleted = await deleteProperty(propertyId);

    if (isPropertyDeleted.error) {
      toast.error(isPropertyDeleted.msg);
      setIsLoading(false);
      return;
    }
    /**
     * Filter Data
     */
    const filteredData = properties.filter((property: any) => {
      return property._id !== propertyId;
    });
    /**
     * Set Filtered Data To "properties" State
     */
    setProperties(filteredData);

    setIsLoading(false);

    toast.success(isPropertyDeleted.msg, {
      position: "bottom-center",
    });
  };

  useEffect(() => {
    getSellerProperties();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-3xl mx-5 poppins font-bold my-5">My Properties</h1>
      {isLoading ? (
        <div className="text-center h-[80vh] flex items-center justify-center">
          <SpinnerLarge />
        </div>
      ) : (
        <>
          <ReactImageLightbox
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            imagesArray={lightBoxImages}
          />
          <div className="overflow-x-auto m-4 relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Property
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date (MM/DD/YYYY)
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
                {properties.length < 1 ? (
                  <tr className="bg-white border-b text-center hover:bg-gray-50">
                    <td colSpan={12} className="py-3">
                      No Properties Found
                    </td>
                  </tr>
                ) : (
                  properties.map((property: any) => {
                    return (
                      <tr
                        key={property._id}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <th
                          scope="row"
                          className="font-medium p-5 text-gray-900 whitespace-nowrap text-start"
                        >
                          <div className="flex items-center justify-start gap-4">
                            <Image
                              src={property.listing_media[0]}
                              onClick={() => {
                                setLightBoxImages(property.listing_media);
                                setIsOpen(!isOpen);
                              }}
                              priority
                              width={100}
                              height={100}
                              alt="Loading..."
                              className="cursor-pointer hover:opacity-75 rounded-md"
                            />
                            <div className="property-info flex flex-col justify-between gap-1">
                              <strong>{property.title}</strong>
                              <div className="location">
                                <PropertyLocation
                                  location={
                                    property.property_address.substring(0, 25) +
                                    "..."
                                  }
                                />
                              </div>
                              <div className="flex">
                                <StarRatingsSM
                                  rating={property.property_average_rating}
                                  reviews={property.property_total_reviews}
                                />
                              </div>
                            </div>
                          </div>
                        </th>
                        <td className="py-4 px-6 text-start">
                          {new Date(property.createdAt).toLocaleString()}
                        </td>
                        <td className="py-4 px-6 text-start">
                          Rs {property.price}
                        </td>
                        <td className="py-4 px-6 text-start">
                          {property.property_size} SQFT
                        </td>
                        <td className="py-4 px-6 text-start">
                          <a
                            href="#"
                            className="font-medium mr-4 text-blue-600 hover:underline"
                          >
                            Edit
                          </a>
                          <span
                            onClick={() => onDeleteProperty(property._id)}
                            className="font-medium cursor-pointer text-red-600 hover:underline"
                          >
                            Delete
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default MyProperties;
