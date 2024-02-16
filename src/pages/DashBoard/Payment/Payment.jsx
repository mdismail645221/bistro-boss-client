import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheackOutForm from "../../../components/CheackOutForm";

// TO DO
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {

  return (
   
      <section className="container section-py">
    
          <div className="payment-title flex justify-center items-center ">
            <h3>PAYMENT</h3>
          </div>
          <Elements stripe={stripePromise}> 
                <CheackOutForm/>
           </Elements>
       
      </section>
  
  );
};

export default Payment;
