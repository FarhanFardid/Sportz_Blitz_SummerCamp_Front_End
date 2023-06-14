import { useQuery } from "@tanstack/react-query";


const useInstructors = () => {

    const {data: instructors = [], refetch} = useQuery({
        queryKey: ["instructors"],
        queryFn: async()=>{
            const response = await fetch('https://sports-blitz-camp-server.vercel.app/instructors')
            return response.json();
        },
    })
return [instructors,refetch]

};

export default useInstructors;