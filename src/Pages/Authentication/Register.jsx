import { useForm } from "react-hook-form";
import regBanner from "../../assets/sports camp/Gallery/registration.png";
import campImg from "../../assets/sports camp/Gallery/SportsCamp.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const googleHandle = () => {};

  return (
    <div>
      <div className="hero">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <img src={regBanner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <div className="text-center lg:text-left w-full p-5">
            <h3 className="text-3xl font-bold text-green-900 py-2 text-center">
              Please Register
            </h3>
            <p className="text-center py-1 text-2xl font-bold text-green-900">
              To
            </p>
            <img src={campImg} alt="camp Img" className="w-full h-[400px]" />
          </div>
          <div className="card w-full  shadow-2xl bg-base-300 m-8">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body m-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
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
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter photo url"
                  name="photo"
                  {...register("photo", { required: true })}
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password again"
                  name="confirm"
                  {...register("confirm", { required: true })}
                  className="input input-bordered"
                />
                {errors.confirm && (
                  <span className="text-red-700">
                    This field is must required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-amber-700"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center font-medium py-2">
              Already Registered to Sportz Blitz? please{" "}
              <Link to="/login" className="text-blue-700 font-bold">
                {" "}
                Sign In
              </Link>
            </p>
            <div>
              <p className="font-bold text-lg text-center">Or Sign Up with Google</p>
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

export default Register;
