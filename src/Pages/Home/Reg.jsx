import { Link } from "react-router-dom";
import regImg from "../../assets/sports camp/Gallery/registration.png";

const Reg = () => {
  return (
    <div className="bg-gray-200">
      <h2 className="md:text-4xl text-2xl font-bold text-slate-800 text-center md:py-3 py-1 ">
        Registration Going On
      </h2>
      <div className="text-center py-4">
        <button className="btn btn-sm md:btn-md bg-slate-700 md:font-bold text-white hover:bg-slate-900">
          <Link to="/register" className="text-white font-bold">
         
            Camp Registration
          </Link>
        </button>
      </div>
      <div className="fluid">
        <img src={regImg} alt="Reg Image" />
      </div>
    </div>
  );
};

export default Reg;
