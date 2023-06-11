import { Link } from "react-router-dom";


const ClassCard = ({cls}) => {
    const {image,class_name} = cls;
    return (
        <div className="card w-96 glass">
        <figure><img src={image} alt="class img" className="h-56 w-full"/></figure>
        <div className="card-body">
          <h2 className="card-title">Class Name: {class_name}</h2>
         
          <div className="card-actions ">
          <Link to="/classes"><button className="btn bg-slate-700 font-bold text-white hover:bg-slate-900">Learn More</button></Link>  
          </div>
        </div>
      </div>
    );
};

export default ClassCard;