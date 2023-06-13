

const PaymentRow = ({pay,index}) => {
    const {image,class_name,transactionId,email,price} =pay;
    return (
        <tbody>
        <tr>
          <td className="font-bold  text-center">{index + 1}</td>
       
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-16 h-16">
                  <img src={image} alt="class image" />
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="font-bold  text-center">{class_name}</div>
          </td>
          <td>
            <div className="font-bold  text-center">{email}</div>
          </td>
          <td className="font-bold text-center"> ${price}</td>
          <td className="font-bold text-center"> {transactionId}
          
          </td>
         
        </tr>
      </tbody>
    );
};

export default PaymentRow;