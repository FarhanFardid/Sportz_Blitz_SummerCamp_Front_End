import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";


const usePayment = () => {
    const {user} = useContext(AuthContext)
   const {data : history= [], refetch} = useQuery({
    queryKey: ["history", user?.email],
    queryFn: async () =>{

        const response = await fetch(`https://sports-blitz-camp-server.vercel.app/payments?email=${user?.email}`)
        return response.json();
    }
   })
    return [history, refetch]
};

export default usePayment;