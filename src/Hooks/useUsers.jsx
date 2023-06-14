import { useQuery } from "@tanstack/react-query";


const useUsers = () => {
    const {data: users =[],refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () =>{
            const response = await fetch('https://sports-blitz-camp-server.vercel.app/users')
            return response.json() 
        }
    })
    return [users, refetch]
};

export default useUsers;