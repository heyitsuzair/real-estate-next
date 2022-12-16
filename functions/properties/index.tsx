import axios from "axios";
import { addPropertyPoint } from "../../utils/api/endPoints";

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
