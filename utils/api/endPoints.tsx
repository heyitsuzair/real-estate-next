export const HOST =
  process.env.NEXT_PUBLIC_HOST || "http://localhost:5000/api/";
export const getPackages = HOST + "packages/get-packages";
export const addUser = HOST + "auth/add-user";
export const loginUser = HOST + "auth/login-user";
export const recoverEmail = HOST + "auth/recover-email/";
export const resetPassword = HOST + "auth/reset-password/";
export const getUserProfile = HOST + "auth/get-user-profile";
export const updateUserProfile = HOST + "auth/update-user-profile";
export const updateUserPackage = HOST + "auth/update-user-package/";
