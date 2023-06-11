import { Link } from "react-router-dom";
import logo from '../assets/sports camp/Logo/logo-1.png'
import { Tooltip } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navigation = () => {
  const {user,logOut} = useContext(AuthContext);
   
    const handleLogout = () =>{
      logOut()

    } 
    const navOptions = (
        <>
          <li>
            <Link to="/" > Home</Link>
          </li>
    
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/classes"> Classes </Link>
          </li>
        
          {user ? (
            <>
               <li><Link to='/dashboard'>Dashboard

         </Link></li> 
            </>
          ) : (
            <li></li>
          )}
        </>
      );
      return (
        <div className="navbar bg-slate-700 font-bold text-white bg-opacity-50  z-10 max-w-screen-xl ">
          <div className="navbar-start">
            <a className=" normal-case  ">
              {" "}
              <img
                src={logo}
                alt="logo"
                className="md:w-20 md:h-20 md:p-1 w-12 h-12 rounded-full md:mr-3 "
              />{" "}
            </a>
            <p className=" md:text-2xl text-lg font-bold ms-1  text-slate-900 ">
              Sportz Blitz  {" "}
              <span className="text-lg block text-center">Summer Camp</span>{" "}
            </p>
            <div className="dropdown navbar-center">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400  rounded-box w-52 font-bold z-10 "
              >
                {navOptions}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-base">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                {" "}
                <Tooltip title={user?.displayName}>
                  <img
                    src={user?.photoURL}
                    alt="User profile"
                    className="md:w-12 md:h-12 w-8 h-8 rounded-full mr-3"
                  />
                </Tooltip>
                <Link>
                  <button
                    className="btn btn-md  bg-slate-800 text-white hover:bg-slate-950"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Link>{" "}
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-md bg-slate-800 text-white hover:bg-slate-950">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      );
};

export default Navigation;