import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div><h2 className="text-3xl text-center font-bold text-slate-900 py-4"> Payment </h2>
        <p className="text-xl text-center font-semibold py-2">Please make your Payment</p>
        <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
        </Elements>
     
        </div>
      
    );
};

export default Payment;