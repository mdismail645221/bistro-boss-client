import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheackOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
        return;
      }


         // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })


    if (error) {
        // console.log('[error]', error);
        paymentError(error?.message)
        
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setPaymentError(null)
      }


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>
        <button className="btn" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheackOutForm;
