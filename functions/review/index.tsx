import axios from "axios";
import { addReview } from "../../utils/api/endPoints";

export const submitReview = async (values: any, id: string) => {
  try {
    const { data } = await axios.post(addReview + id, values);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
