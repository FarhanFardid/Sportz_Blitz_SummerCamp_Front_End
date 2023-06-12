import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

  const {data: isInstructor, isLoading : isInstructorLoading} = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async()=>{
        const response = await axiosSecure.get(`/users/instructor/${user?.email}`)
        console.log(response);
        return response.data.instructor;
    } 

  })
  return [isInstructor,isInstructorLoading]
};

export default useInstructor;