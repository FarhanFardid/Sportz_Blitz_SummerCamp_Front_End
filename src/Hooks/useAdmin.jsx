import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
//   const token = localStorage.getItem("access-token");
const [axiosSecure] = useAxiosSecure()
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    // queryFn: async () => {
    //   const response = await fetch(
    //     `https://sports-blitz-camp-server.vercel.app/users/admin/${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer${token}`,
    //       },
    //     }
    //   );
    //   console.log(response);
    //   return response.json();
    // },
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log('is admin response', res);
        return res.data.admin;
    }
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
