import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const loadedData = useLoaderData();
  const { class_name, instructor_name, instructor_email, price, _id } =
    loadedData;
  console.log(loadedData);

  const onSubmit = (data) => {
    const { name, instructor, price, email } = data;
    const updatedClass = {
      class_name: name,
      instructor_name: instructor,
      instructor_email: email,
      price,
    };
    
    console.log(updatedClass);

    fetch(`https://sports-blitz-camp-server.vercel.app/classes/update/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated", "Class Info Updated Successfully.", "success");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-4">
        Update Class information
      </h2>
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
              defaultValue={class_name}
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
              defaultValue={instructor_name}
              placeholder="Enter your name"
              {...register("instructor", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.instructor && (
              <span className="text-red-700">Instructor name is required</span>
            )}
          </div>
          <div className="form-control w-full px-3">
            <label className="label">
              <span className="label-text font-bold">Instructor Email*</span>
            </label>
            <input
              type="email"
              defaultValue={instructor_email}
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <span className="text-red-700">Instructor email is required</span>
            )}
          </div>

          <div className="form-control w-full px-3">
            <label className="label">
              <span className="label-text font-bold">Price($)*</span>
            </label>
            <input
              type="number"
              placeholder="Enter price"
              defaultValue={price}
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.price && (
              <span className="text-red-700">Price is required</span>
            )}
          </div>

          <div className="col-span-2 p-3 bg-slate-900 w-fit mx-auto flex text-white rounded-lg mb-5 hover:bg-slate-700">
            <input type="submit" className=" " value="Update Class" />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
