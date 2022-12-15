import * as Yup from "yup";

export const NewPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Please Enter Password")
    .min(5, "Password Must Be Of Minimum 5 Characters"),
  confirm_password: Yup.string()
    .required("Please Enter Confirm Password")
    .oneOf([Yup.ref("password"), null], "Passwords Doesn't Match!"),
});
