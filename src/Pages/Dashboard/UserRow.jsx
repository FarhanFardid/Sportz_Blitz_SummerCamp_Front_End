import { BsPersonCircle, BsPersonCheck, BsPersonFill } from "react-icons/bs";
import { FaTrashAlt, FaUserGraduate } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";

const UserRow = ({ user, index, refetch }) => {
  const { name, email, _id, role } = user;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove From User?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-blitz-camp-server.vercel.app/users/${id}`, {
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
                "Person has been deleted from user.",
                "success"
              );
            }
          });
      }
    });
  };
  const handleAdmin = (id) => {
    Swal.fire({
      title: "Are you sure? Make This person Admin",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-blitz-camp-server.vercel.app/users/admin/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire(
                "New Admin",
                "Person has been appointed as Admin.",
                "success"
              );
            }
          });
      }
    });
  };
  const handleInstructor = (id) => {
    Swal.fire({
      title: "Are you sure? Make This person Instructor",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Instructor",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-blitz-camp-server.vercel.app/users/instructor/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire(
                "New Instructor",
                "Person has been appointed as an Instructor.",
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
        <td className="font-bold text-center">{index + 1}</td>

        <td>
          <p className="font-bold text-center">{name}</p>
        </td>
        <td>
          <div className="font-bold text-center">{email}</div>
        </td>
        <td className="font-bold text-center">
          {role === "admin" ? (
            <>
              <button>
                {" "}
                <span className="flex flex-col items-center justify-center">
                  Admin <BsPersonCheck className="h-6 w-6" />{" "}
                </span>
              </button>
            </>
          ) : role === "instructor" ? (
            <>
              {" "}
              <button>
                <span className="flex flex-col items-center justify-center">
                  Instructor
                  <BsPersonCircle className="h-6 w-6" />
                </span>
              </button>
            </>
          ) : (
            <>
              {" "}
              <button>
                <span className="flex flex-col items-center justify-center">
                  Student
                  <BsPersonFill className="h-6 w-6" />
                </span>
              </button>
            </>
          )}
        </td>
        <td className="text-center">
          <button
            onClick={() => handleAdmin(_id)}
            className={
              role === "admin"
                ? "btn btn-circle btn-sm  btn-disabled  bg-green-800 text-white text-center hover:bg-green-600"
                : "btn btn-circle btn-sm bg-green-800 text-white hover:bg-green-600 "
            }
          >
            <RiAdminFill />
          </button>
        </td>
        <td className="text-center">
          <button
            onClick={() => handleInstructor(_id)}
            className={
             ((role === "admin" )||(role === "instructor"))
                ? "btn btn-circle btn-sm bg-cyan-800 text-white hover:bg-cyan-600 btn-disabled"
                : "btn btn-circle btn-sm bg-cyan-800 text-white hover:bg-cyan-600"
            }
          >
            <FaUserGraduate />
          </button>
        </td>

        <td className="text-center">
          <button
            onClick={() => handleDelete(_id)}
            className={
              role === "admin"
                ? "btn btn-circle btn-sm bg-red-800 text-white hover:bg-red-600 btn-disabled"
                : "btn btn-circle btn-sm bg-red-800 text-white hover:bg-red-600"
            }
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserRow;
