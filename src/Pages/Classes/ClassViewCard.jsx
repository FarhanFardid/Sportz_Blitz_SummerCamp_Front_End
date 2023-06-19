import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useClassCart from "../../Hooks/useClassCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const ClassViewCard = ({ cls }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [, refetch] = useClassCart();
  const {
    _id,
    class_name,
    image,
    instructor_name,
    available_seats,
    price,
    status,
  } = cls;
  const handleSelect = () => {
    if (user) {
      const selectedClass = {
        classId: _id,
        class_name,
        image,
        price,
        instructor_name,
        email: user.email,
      };
      fetch("https://sports-blitz-camp-server.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            refetch(); // refetch to show the updated data
            Swal.fire({
              title: "Success",
              text: "Class added to selected class cart successfully ",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please, login to add class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className={(available_seats == 0)? "card lg:card-side bg-red-600 text-white grid grid-cols-12 gap-2 py-3" : "card lg:card-side bg-base-200 grid grid-cols-12 gap-2 py-3"}>
      <figure className="md:col-span-8 col-span-full">
        <img src={image} alt="class images" className="md:h-96 h-60 w-full " />
      </figure>
      <div className="card-body md:col-span-4 col-span-12 space-y-1">
        <h2 className="card-title md:text-2xl text-lg font-bold">{class_name}</h2>
        <p className="font-bold md:text-xl text-sm">Instructor Name: {instructor_name}</p>
        <p className="font-bold md:text-lg text-sm">available_seats: {available_seats}</p>
        <p className="font-bold text-xs md:text-base ">Price: ${price}</p>
        <p className="font-bold text-xs md:text-base">Status: {status}</p>
        <div className="card-actions">
          <button
            onClick={() => handleSelect(cls)}
            className={(isAdmin || isInstructor ||(available_seats == 0))? "btn md:btn-md btn-sm font-bold text-white bg-slate-600  btn-disabled" : "btn font-bold text-white bg-slate-800 hover:bg-slate-950"}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassViewCard;
