import * as Yup from "yup";

export const PackagesSchema = Yup.object({
  package: Yup.string().required("Please Choose Package"),
  card_no: Yup.string()
    .min(16, "Card Number Must Be 16 Digit")
    .max(16, "Card Number Must Be 16 Digit")
    .required("Please Enter Card Number"),
  card_cvc: Yup.string()
    .min(3, "Card CVC Must Be 3 Digit")
    .max(3, "Card CVC Must Be 3 Digit")
    .required("Please Enter Card CVC"),
  expiry_month: Yup.string()
    .min(2, "Expiry Month Must Be 2 Digit")
    .max(2, "Expiry Month Must Be 2 Digit")
    .required("Please Enter Expiry Month"),
  expiry_year: Yup.string()
    .min(4, "Expiry Year Must Be 4 Digit")
    .max(4, "Expiry Year Must Be 4 Digit")
    .required("Please Enter Expiry Year"),
});
