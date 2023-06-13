import useClasses from "../../Hooks/useClasses";
import ManageClassRow from "./ManageClassRow";


const ManageClasses = () => {
    const [classes,refetch] = useClasses();
    return (
        <div>
        <h2 className="text-3xl text-center font-bold text-slate-900 py-4">
          {" "}
          Manage All Classes{" "}
        </h2>
        <h3 className="text-xl text-center font-semibold">
          Total Classes: {classes.length}
        </h3>
        
          <div className="overflow-x-auto ">
            <table className="table table-sm  my-3">
              <thead>
              <tr>
          <th className="font-bold text-center">
            No.
          </th>
          <th className="font-bold text-center text-black">Image</th>
          <th className="font-bold text-center text-black">Class Name</th>
          <th className="font-bold text-center text-black">Instructor</th>
          <th className="font-bold text-center text-black">Instructor Email</th>
          <th className="font-bold text-center text-black">Available Seats</th>
          <th className="font-bold text-center text-black">Status</th>
          <th className="font-bold text-center text-black">Approved</th>
          <th className="font-bold text-center text-black">Deny</th>
          <th className="font-bold text-center text-black">Feedback</th>
        </tr>
              </thead>
  
              {classes.map((cls, index) => (
                <ManageClassRow
                  key={cls._id}
                  cls={cls}
                  index={index}
                  refetch={refetch}
                ></ManageClassRow>
              ))}
            </table>
          </div>
        
      </div>
    );
};

export default ManageClasses;