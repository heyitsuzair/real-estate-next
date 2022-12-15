import axios from "axios";
import { getPackages } from "../../utils/api/endPoints";

interface PackageTypes {
  _id: string;
  label: string;
  price: number;
  allowed_listings: number;
  __v: number;
}

export const fetchPackages = async () => {
  try {
    const { data } = await axios.get(getPackages);
    return data;
  } catch (error: any) {
    return error.message;
  }
};
export const retrievePackageAllowedListings = (
  packages: PackageTypes[],
  package_id: string
) => {
  /**
   * Finding A Package By Its "ID"
   */
  const filteredPackage = packages.find(
    (item: PackageTypes) => item._id === package_id
  );

  /**
   * @return Allowed Listings Of Package If Found, Else Return 0 If It Is Undefined
   */

  return filteredPackage ? filteredPackage.allowed_listings : 0;
};
