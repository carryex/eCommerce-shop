import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I5ywhAx9qhczapmkB6xAE4HLmnROIXfxTtWL8qo6rvJpKLTbIsVoZuymInGmzgkugXwcDjg5btxJyLmECaQqf4F00kU5kCt8B";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succeful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Clothing ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is$${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
