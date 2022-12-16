import axios from "axios";
import { addUser, loginUser, recoverEmail } from "../../utils/api/endPoints";

interface registerUserTypes {
  name: string;
  phone_no: string;
  email: string;
  password: string;
  package: string;
  card_no: string;
  card_cvc: string;
  expiry_month: string;
  expiry_year: string;
}

interface authenticateUserTypes {
  email: string;
  password: string;
}

export const registerUser = async (values: registerUserTypes) => {
  try {
    const { data } = await axios.post(addUser, values);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const authenticateUser = async (values: authenticateUserTypes) => {
  try {
    const { data } = await axios.post(loginUser, values);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const logoutUser = async () => {
  localStorage.removeItem("re-user");
};
export const forgotPassword = async (email: string) => {
  try {
    const { data } = await axios.post(recoverEmail + email);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
