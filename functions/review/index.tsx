import axios from "axios";
import { addReview, getSellerReviews } from "../../utils/api/endPoints";

export const submitReview = async (values: any, id: string) => {
  try {
    const { data } = await axios.post(addReview + id, values);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const fetchSellerReviews = async () => {
  let token: null | string = null;
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("re-user") || "");
  }
  try {
    const { data } = await axios.get(getSellerReviews, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
