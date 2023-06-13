import useClassCart from "../../Hooks/useClassCart";
import EnrolledRow from "./EnrolledRow";

const EnrolledClasses = () => {
  const [classCart] = useClassCart();
  const enrolledClasses = classCart.filter(
    (enroll) => enroll.status === "paid"
  );
  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-slate-900 py-4">
        My Enrolled Classes
      </h2>
      <h3 className="text-xl text-center font-semibold">
        Total Enrolled Classes : {enrolledClasses.length}
      </h3>
      <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
              <tr>
                <th className="text-black font-bold text-center">Class No.</th>
                <th className="text-black font-bold text-center">
                  Class Image
                </th>
                <th className="text-black font-bold text-center">Class Name</th>
                <th className="text-black font-bold text-center">
                  Instructor Name
                </th>
                <th className="text-black font-bold text-center">Price</th>
              </tr>
            </thead>

            {enrolledClasses.map((enroll, index) => (
              <EnrolledRow key={enroll._id} enroll={enroll} index={index}></EnrolledRow>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClasses;
