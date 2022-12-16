import axios from "axios";
import {
  addUser,
  getUserProfile,
  loginUser,
  recoverEmail,
  resetPassword,
  updateUserProfile,
} from "../../utils/api/endPoints";

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

interface editProfileTypes {
  name: string;
  email: string;
  password: string;
  phone_no: string;
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
export const newPassword = async (
  email: string | string[] | undefined,
  token: string | string[] | undefined,
  password: string
) => {
  try {
    const { data } = await axios.put(resetPassword + email + "/" + token, {
      password,
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const fetchUserProfile = async () => {
  let token: null | string = null;
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("re-user") || "");
  }

  try {
    const { data } = await axios.get(getUserProfile, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const editUserProfile = async (values: editProfileTypes) => {
  let token: null | string = null;
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("re-user") || "");
  }
  try {
    const { data } = await axios.put(updateUserProfile, values, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
