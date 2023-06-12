import { FaArrowAltCircleUp } from "react-icons/fa";


const MyClassRow = ({cls,index,refetch}) => {
    const {class_name,available_seats,price,image,status,total_enrolled,feedback} = cls;
    return (
        <tbody>
        <tr>
          <td className="font-bold">{index + 1}</td>
  
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
            <div className="font-bold">{class_name}</div>
          </td>
          <td>
            <div className="font-bold">{available_seats}</div>
          </td>
          <td className="font-bold"> {total_enrolled}</td>
          
          <td className="font-bold"> ${price}</td>
          
          <td className="font-bold"> {status}</td>
        
          <td className="font-bold"> {feedback}</td>
          <td>
            <button
              onClick={() => handlePayment(_id)}
              className="btn btn-circle btn-sm bg-green-800 text-white hover:bg-green-700"
            >
              <FaArrowAltCircleUp />
            </button>
          </td>
         
      </tr>
      </tbody>
    );
};

export default MyClassRow;