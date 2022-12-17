import axios from "axios";
import {
  addPropertyPoint,
  deletePropertyPoint,
  getSellerProperties,
} from "../../utils/api/endPoints";

export const addProperty = async (values: any) => {
  let token: null | string = null;
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("re-user") || "");
  }
  try {
    const { data } = await axios.post(addPropertyPoint, values, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const fetchSellerProperties = async () => {
  let token: null | string = null;
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("re-user") || "");
  }
  try {
    const { data } = await axios.get(getSellerProperties, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const deleteProperty = async (id: string) => {
  let token: null | string = null;
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("re-user") || "");
  }
  try {
    const { data } = await axios.delete(deletePropertyPoint + id, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
