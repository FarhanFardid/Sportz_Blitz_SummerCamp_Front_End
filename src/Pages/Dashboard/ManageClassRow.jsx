import { MdFeedback } from "react-icons/md";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClassRow = ({ cls, index, refetch }) => {
  const {
    class_name,
    _id,
    image,
    status,
    available_seats,
    instructor_name,
    instructor_email,
  } = cls;
  const handleApproved = (id) => {
    Swal.fire({
      title: "Are you sure? Approve The Class",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve Class",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/approved/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("New Class", "Class has been approved.", "success");
            }
          });
      }
    });
  };
  const handleDeny = (id) => {
    Swal.fire({
      title: "Are you sure? Deny The Class",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny ",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/denied/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire(" Class Denied", "Class has been Denied.", "success");
            }
          });
      }
    });
  };

  return (
    <tbody>
      <tr>
        <td className="font-bold">{index + 1}</td>
        <td>
          {" "}
          <div className="items-center justify-center">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 text-center">
                <img src={image} alt="class image" />
              </div>
            </div>
          </div>
        </td>

        <td>
          <p className="font-bold text-center">{class_name}</p>
        </td>
        <td className="font-bold text-center">{instructor_name}</td>
        <td className="font-bold text-center">{instructor_email}</td>
        <td className="font-bold text-center">{available_seats}</td>
        <td className="font-bold text-center">{status}</td>

        <td className="text-center">
          <button
            onClick={() => handleApproved(_id)}
            className={
              status === "pending"
                ? "btn btn-circle btn-sm   bg-green-800 text-white text-center hover:bg-green-600"
                : "btn btn-circle btn-sm bg-green-800 text-white hover:bg-green-600 text-center btn-disabled  "
            }
          >
            <FaThumbsUp className="h-4 w-4" />
          </button>
        </td>
        <td className="text-center">
          <button
            onClick={() => handleDeny(_id)}
            className={
              status === "pending"
                ? "btn btn-circle btn-sm bg-red-800 text-white text-center hover:bg-red-600"
                : "btn btn-circle btn-sm bg-red-800 text-white text-center hover:bg-red-600  btn-disabled"
            }
          >
            <FaThumbsDown className="h-4 w-4" />
          </button>
        </td>

        <td className="text-center">
          <Link to={`/dashboard/feedback/${_id}`}>
            {" "}
            <button
              className={
                status === "denied"
                  ? "btn btn-circle btn-sm bg-cyan-800 text-white hover:bg-cyan-600 "
                  : "btn btn-circle btn-sm bg-cyan-800 text-white hover:bg-cyan-600 btn-disabled"
              }
            >
              <MdFeedback className="h-4 w-4" />
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageClassRow;
