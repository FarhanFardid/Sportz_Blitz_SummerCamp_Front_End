import { useForm } from "react-hook-form";
import regBanner from "../../assets/sports camp/Gallery/registartion.png";
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
  return (
    <div>
      <div
        className="hero h-[550px]"
        style={{ backgroundImage: `url(${regBanner})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Please Register</h1>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <div className="text-center lg:text-left w-full p-5">
            <img src={campImg} alt="Auth Img" className="w-full" />
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
                  className="btn bg-[#D1A054]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center font-medium py-2">
              Already have Sportz Blitz Account?
              <Link to="/login" className="text-blue-700 font-bold">
                {" "}
                Sign In
              </Link>
            </p>
            <div>
              <p className="font-bold text-lg text-center">Or Sign Up with</p>
              <div className=" py-3">
                <button
                  onClick={googleHandle}
                  className="p-1 m-2 btn btn-circle bg-gray-300 hover:bg-[#D1A054] text-gray-900 text-2xl"
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
