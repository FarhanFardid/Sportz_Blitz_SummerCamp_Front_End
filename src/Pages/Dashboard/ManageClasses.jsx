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
          <th className="font-bold text-center">Image</th>
          <th className="font-bold text-center">Class Name</th>
          <th className="font-bold text-center">Instructor</th>
          <th className="font-bold text-center">Instructor Email</th>
          <th className="font-bold text-center">Available Seats</th>
          <th className="font-bold text-center">Status</th>
          <th className="font-bold text-center">Approved</th>
          <th className="font-bold text-center">Deny</th>
          <th className="font-bold text-center">Feedback</th>
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