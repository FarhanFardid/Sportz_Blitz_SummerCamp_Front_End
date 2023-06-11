import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useClassCart = () => {
    const {user} = useContext(AuthContext)
   const {data : classCart= [], refetch} = useQuery({
    queryKey: ["classCart", user?.email],
    queryFn: async () =>{

        const response = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
        return response.json();
    }
   })
    return [classCart, refetch]
};

export default useClassCart;
