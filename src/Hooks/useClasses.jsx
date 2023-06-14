import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
  const {data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async()=>{
        const response = await fetch('https://sports-blitz-camp-server.vercel.app/classes')
        return response.json();

    }
  })
  return [classes,refetch]
};

export default useClasses;