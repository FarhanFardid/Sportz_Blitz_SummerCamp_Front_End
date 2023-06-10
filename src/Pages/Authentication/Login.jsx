import { useForm } from "react-hook-form";
import loginBanner from "../../assets/sports camp/Gallery/shadowBanner.png";
import sportImg from "../../assets/sports camp/Gallery/sports equipments.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle,FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {userSignIn,google} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [hide,setHide] = useState(true)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userSignIn(data.email,data.password)
    .then(res => {
        const loggedUser = res.user;
        toast.success("Successfully Logged In")
        console.log(loggedUser);
        navigate(from);
        reset()
    })
    .catch(error=>{
        console.log(error)
        toast.error("Login Failed")
    })

};

  const googleHandle = () => {
    google()
    .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        toast.success("Login Successful");
              navigate(from);
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        console.log(savedUser);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              
              toast.success("User Successfully Added to DB ");
              
            }
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login Failed");
      });
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <img src={loginBanner} alt="banner" />
        
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <div className="text-center lg:text-left w-full p-5">
            <img src={sportImg} alt="sport Img" className="w-full h-[400px]" />
          </div>
          <div className="card w-full  shadow-2xl bg-base-300 m-8">
          <h3 className="text-3xl font-bold text-amber-900 pt-4 text-center">
              Please Login
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body m-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700">Email is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type={hide ? "password" : "text"}
                  placeholder="Enter password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/,
                  })}
                  className="input input-bordered"
                  
                />
                <span className="inline"><button onClick={()=> setHide(!hide)} >{hide ? "View" : "Hide"}<FaEye className="inline-block m-1"></FaEye></button></span>
                {errors.password?.type === "required" && (
                  <p className="text-red-700" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-700" role="alert">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-700" role="alert">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-700" role="alert">
                    Password must contain one uppercase, one lowercase, one
                    number and one special characters
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn text-white font-bold bg-amber-700 hover:bg-amber-900"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center font-medium py-2">
              Not Registered yet to Sportz Blitz? please{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                {" "}
                Register
              </Link>
            </p>
            <div>
              <p className="font-bold text-lg text-center">
                Or Sign In with Google
              </p>
              <div className=" py-3 text-center">
                <button
                  onClick={googleHandle}
                  className="p-1 m-2 btn btn-circle  bg-slate-400 hover:bg-amber-700 text-blue-900 text-2xl"
                >
                  <FaGoogle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
