import * as Yup from "yup";

export const FindNowSchema = Yup.object({
  area: Yup.string().required("Please Choose Area"),
  status: Yup.string().required("Please Choose Status"),
  type: Yup.string().required("Please Choose Type"),
});
