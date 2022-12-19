import * as Yup from "yup";

export const AddReviewFormSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name Must Be Atleast 2 Characters")
    .max(25)
    .required("Please Enter Your Name"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  website: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter Correct URL"
  ),
  msg: Yup.string().required("Please Enter Any Comment"),
  stars: Yup.number()
    .min(1, "Stars Must Be Greater Than Or Equal To 1")
    .required("Please Choose Stars!"),
});
