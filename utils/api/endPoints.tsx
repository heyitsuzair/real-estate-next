export const HOST =
  process.env.NEXT_PUBLIC_HOST || "http://localhost:5000/api/";
export const getPackages = HOST + "packages/get-packages";
export const addUser = HOST + "auth/add-user";
export const loginUser = HOST + "auth/login-user";
