import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClassRow = ({ cls, index }) => {
  const {
    class_name,
    available_seats,
    price,
    image,
    status,
    total_enrolled,
    feedback,
    _id,
  } = cls;

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
          <div className="font-bold text-center">{class_name}</div>
        </td>
        <td>
          <div className="font-bold text-center">{available_seats}</div>
        </td>
        <td className="font-bold text-center"> {total_enrolled}</td>

        <td className="font-bold text-center"> ${price}</td>

        <td className="font-bold text-center"> {status}</td>

        <td className="font-bold text-center"> {feedback}</td>
        <td>
          <Link to={`/dashboard/updateClass/${_id}`}>
            <button className="btn btn-circle btn-sm bg-green-800 text-white hover:bg-green-700 mx-auto">
              <FaArrowAltCircleUp />
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default MyClassRow;
