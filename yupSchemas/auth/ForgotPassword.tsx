import * as Yup from "yup";

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
});
