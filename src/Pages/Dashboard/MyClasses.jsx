import { useContext } from "react";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../Providers/AuthProviders";
import MyClassRow from "./MyClassRow";


const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [classes,refetch] = useClasses();
    const myClasses = classes.filter(cls => cls.instructor_email === user.email)
    console.log(myClasses);
    return (
        <div>
            <h2 className="text-3xl text-center font-bold py-4 text-slate-950"> My classes</h2>
            <h3 className="text-xl text-center font-semibold">My total classes: {myClasses.length}</h3>
            <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
            <tr>
        <th className="font-bold text-black text-center">
          No.
        </th>
        <th className="font-bold text-black text-center">Class Image</th>
        <th className="font-bold text-black text-center">Class Name</th>
        <th className="font-bold text-black text-center">Available seats</th>
        <th className="font-bold text-black text-center">Total Enrolled</th>
        <th className="font-bold text-black text-center">Price</th>
        <th className="font-bold text-black text-center">Status</th>
        <th className="font-bold text-black text-center">Feedback</th>
        <th className="font-bold text-black text-center">Update</th>
      </tr>
            </thead>

            {myClasses.map((cls, index) => (
              <MyClassRow
                key={cls._id}
                cls={cls}
                index={index}
                refetch={refetch}
              ></MyClassRow>
            ))}
          </table>
        </div>
      </div>
        </div>
    );
};

export default MyClasses;