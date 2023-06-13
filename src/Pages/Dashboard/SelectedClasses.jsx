import useClassCart from "../../Hooks/useClassCart";
import ClassRow from "./ClassRow";


const SelectedClasses = () => {
    const [classCart, refetch] = useClassCart();
    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-slate-900 py-4">My Selected Classes</h2>
            <h3 className="text-xl text-center font-semibold">Total Selected Classes in the Cart: {classCart.length}</h3>

              <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
              <tr>
                <th className="text-black font-bold text-center">Class No.</th>
                <th className="text-black font-bold text-center">Class Image</th>
                <th className="text-black font-bold text-center">Class Name</th>
                <th className="text-black font-bold text-center">Instructor Name</th>
                <th className="text-black font-bold text-center">Price</th>
                <th className="text-black font-bold text-center">Pay</th>
                <th className="text-black font-bold text-center">Delete</th>
              </tr>
            </thead>

            {classCart.map((cls, index) => (
              <ClassRow
                key={cls._id}
                cls={cls}
                index={index}
                refetch={refetch}
              ></ClassRow>
            ))}
          </table>
        </div>
      </div>
        </div>
    );
};

export default SelectedClasses;