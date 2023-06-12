import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";

const AddClasses = () => {
    const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
        <h2 className="text-2xl text-center font-bold py-3 text-slate-800">Add A New Class</h2>
      <div className="p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5 m-5 bg-slate-200 rounded-lg"
        >
          <div className="form-control w-full  px-3 ">
            <label className="label">
              <span className="label-text font-bold">Class Name*</span>
            </label>
            <input
              type="text"
              placeholder="Enter class name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-700">Class name is required</span>
            )}
          </div>
          <div className="form-control w-full px-3">
            <label className="label">
              <span className="label-text font-bold">Instructor Name*</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Enter instructor name"
              {...register("instructor", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.instructor && (
              <span className="text-red-700">Instructor name is required</span>
            )}
          </div>
          <div className="form-control w-full px-3">
            <label className="label">
              <span className="label-text font-bold">Available Seats*</span>
            </label>
            <input
              type="number"
              placeholder="Enter available seats"
              {...register("seats", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.seats && (
              <span className="text-red-700"> Available seat number is required</span>
            )}
          </div>
          <div className="form-control w-full px-3">
            <label className="label">
              <span className="label-text font-bold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Enter price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.price && (
              <span className="text-red-700">Price is required</span>
            )}
          </div>
    
          <div className="form-control w-full px-3 py-1">
            <label className="label">
              <span className="label-text font-bold">Upload Class image*</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-700">Class image is required</span>
            )}
          </div>

          <div className="col-span-2 p-3 bg-slate-900 w-fit mx-auto flex text-white rounded-lg mb-5 hover:bg-slate-700">
            <input type="submit" className=" " value="Add Class" />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
