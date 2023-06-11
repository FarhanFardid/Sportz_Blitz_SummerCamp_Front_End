import { useQuery } from "@tanstack/react-query";


const useInstructors = () => {

    const {data: instructors = [], refetch} = useQuery({
        queryKey: ["instructors"],
        queryFn: async()=>{
            const response = await fetch('http://localhost:5000/instructors')
            return response.json();
        },
    })
return [instructors,refetch]

};

export default useInstructors;