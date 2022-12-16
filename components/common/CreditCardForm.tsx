import React from "react";
import TextInput from "./TextInput";

interface PropTypes {
  values: any;
  handleBlur: any;
  handleChange: any;
  errors: any;
  touched: any;
}

const CreditCardForm = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
}: PropTypes) => {
  return (
    <div className="credit-card-form">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12">
          <TextInput
            id="card_no"
            type="number"
            name="card_no"
            value={values.card_no}
            label="Card Number"
            error={errors.card_no && touched.card_no}
            errorText={errors.card_no}
            onBlur={handleBlur}
            placeholder="4242424242424242"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <TextInput
            id="card_cvc"
            type="number"
            name="card_cvc"
            value={values.card_cvc}
            label="Card CVC"
            error={errors.card_cvc && touched.card_cvc}
            errorText={errors.card_cvc}
            onBlur={handleBlur}
            placeholder="123"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <TextInput
            id="expiry_year"
            type="number"
            name="expiry_year"
            value={values.expiry_year}
            label="Expiry Year"
            error={errors.expiry_year && touched.expiry_year}
            errorText={errors.expiry_year}
            onBlur={handleBlur}
            placeholder="2024"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <TextInput
            id="expiry_month"
            type="number"
            name="expiry_month"
            value={values.expiry_month}
            label="Expiry Month"
            error={errors.expiry_month && touched.expiry_month}
            errorText={errors.expiry_month}
            onBlur={handleBlur}
            placeholder="12"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
