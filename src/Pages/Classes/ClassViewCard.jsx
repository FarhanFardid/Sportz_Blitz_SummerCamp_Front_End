import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";


const ClassViewCard = ({cls}) => {

    const navigate = useNavigate(); 
    const {user} = useContext(AuthContext);

    const {class_name,image,instructor_name,available_seats,price,status} = cls;
    const handleSelect = () =>{
          if(user){
            navigate('/')
          }
          else{
            navigate('/login')
          }
    }
    return (
        <div className="card lg:card-side bg-base-100 grid grid-cols-12 gap-2">
        <figure className="col-span-8"><img src={image} alt="class images" className="h-96 " /></figure>
        <div className="card-body col-span-4 space-y-1">
          <h2 className="card-title text-2xl font-bold">{class_name}</h2>
          <p className="font-bold text-xl">Instructor Name: {instructor_name}</p>
          <p className="font-bold text-lg">available_seats: {available_seats}</p>
          <p className="font-bold ">Price: ${price}</p>
          <p className="font-bold ">Status: {status}</p>
          <div className="card-actions">
            <button onClick={handleSelect} className="btn font-bold text-white bg-slate-800 hover:bg-slate-950">Select Class</button>
          </div>
        </div>
      </div>
    );
};

export default ClassViewCard;