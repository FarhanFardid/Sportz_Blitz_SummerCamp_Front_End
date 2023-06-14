import { Link } from "react-router-dom";


const ClassCard = ({cls}) => {
    const {image,class_name} = cls;
    return (
        <div className="card md:w-96 w-80 mx-auto glass">
        <figure><img src={image} alt="class img" className="md:h-56 h-40 w-full "/></figure>
        <div className="card-body">
          <h2 className="card-title text-lg md:text-xl">Class Name: {class_name}</h2>
         
          <div className="card-actions ">
          <Link to="/classes"><button className="btn btn-sm md:btn-md bg-slate-700 md:font-bold text-white hover:bg-slate-900">Learn More</button></Link>  
          </div>
        </div>
      </div>
    );
};

export default ClassCard;