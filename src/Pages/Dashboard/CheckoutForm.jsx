import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProviders";


const CheckoutForm = ({value}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {value})
        .then (res=> {
            
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements ){
            return
        }
        const card = elements.getElement(CardElement);

        if(card == null){
            return 
        }
        console.log('card', card)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            setCardError(error.message)
            console.log('error', error)
        }
       else{
        setCardError('')
        console.log('payment method', paymentMethod)
       }
       const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
         payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName || 'anonymous',
                email: user?.email || "unknown"
            },
         },
       },
       );
       if(confirmError){
        console.log(confirmError)
       }
       console.log(paymentIntent)
    }
    return (
     <>
        <form className="w-2/3 m-10 border-2 p-3 mx-auto text-center" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn bg-slate-800 w-20 my-4 mx-auto text-center text-white hover:bg-slate-950" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-700 text-center"> {cardError}</p>}
      </>
      
    );
};

export default CheckoutForm;