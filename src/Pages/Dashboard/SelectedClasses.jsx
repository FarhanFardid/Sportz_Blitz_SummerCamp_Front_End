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
                <th>Class No.</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Delete</th>
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