import usePayment from "../../Hooks/usePayment";
import PaymentRow from "./PaymentRow";


const PaymentHistory = () => {
    const [history]= usePayment();
    return (
        <div>
        <h2 className="text-3xl text-center font-bold text-slate-900 py-4">My Payment History</h2>
        <h3 className="text-xl text-center font-semibold">Total payment history: {history.length}</h3>

          <div className="m-4">
    <div className="overflow-x-auto">
      <table className="table mx-auto w-full m-5">
        <thead>
          <tr>
            <th className="text-black font-bold text-center"> No.</th>
         
            <th className="text-black font-bold text-center">Class Image</th>
            <th className="text-black font-bold text-center">Class Name</th>
            <th className="text-black font-bold text-center">Email</th>
            <th className="text-black font-bold text-center">Price</th>
            <th className="text-black font-bold text-center">TransactionId</th>
        
          </tr>
        </thead>

        {history.map((pay, index) => (
          <PaymentRow
            key={pay._id}
            pay={pay}
            index={index}
            
          ></PaymentRow>
        ))}
      </table>
    </div>
  </div>
    </div>
    );
};

export default PaymentHistory;