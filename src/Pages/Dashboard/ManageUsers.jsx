import useUsers from "../../Hooks/useUsers";
import UserRow from "./UserRow";

const ManageUsers = () => {
  const [users, refetch] = useUsers();
  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-slate-900 py-4">
        {" "}
        Manage All Users{" "}
      </h2>
      <h3 className="text-xl text-center font-semibold">
        Total Users: {users.length}
      </h3>
      <div className="m-4">
        <div className="overflow-x-auto">
          <table className="table mx-auto w-full m-5">
            <thead>
            <tr>
        <th className="font-bold text-center text-black">
          No.
        </th>
        <th className="font-bold text-center text-black">Name</th>
        <th className="font-bold text-center text-black">Email</th>
        <th className="font-bold text-center text-black">Role</th>
        <th className="font-bold text-center text-black">Make Admin</th>
        <th className="font-bold text-center text-black">Make Instructor</th>
        <th className="font-bold text-center text-black">Delete</th>
      </tr>
            </thead>

            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
