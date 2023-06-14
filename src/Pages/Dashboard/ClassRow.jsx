import { FaMoneyCheck, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ClassRow = ({ cls, index, refetch }) => {
  const { _id, class_name, image, instructor_name, price } = cls;

  
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Remove Class From Cart?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-blitz-camp-server.vercel.app/cart/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Class has been removed from cart.",
                "success"
              );
            }
          });
      }
    });
  };

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
          <div className="font-bold  text-center">{instructor_name}</div>
        </td>
        <td className="font-bold text-center"> ${price}</td>
        <td className="font-bold text-center">
         <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-circle btn-sm bg-green-800 text-white hover:bg-green-600 ">
            <FaMoneyCheck />
          </button></Link> 
        </td>
        <td className="font-bold text-center">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm bg-red-800 text-white hover:bg-red-600"
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ClassRow;
