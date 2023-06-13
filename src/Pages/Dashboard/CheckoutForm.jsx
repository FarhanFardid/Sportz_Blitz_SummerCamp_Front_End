import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!stripe || !elements ){
            return
        }
        const card = elements.getElement(CardElement);

        if(card == null){
            return 
        }
       
    }
    return (
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
        <button className="btn bg-slate-800 w-20 my-4 mx-auto text-center text-white hover:bg-slate-950" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheckoutForm;