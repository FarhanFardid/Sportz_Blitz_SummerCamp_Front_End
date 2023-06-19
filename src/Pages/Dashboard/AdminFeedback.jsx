import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";


const AdminFeedback = () => {
    const loadedData = useLoaderData();
    const {_id}= loadedData;
      

    // console.log(loadedData);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) =>  {
        const feedback = data.feedback;
       const message = {feedback};
    
          
        // console.log(data);
        reset()
        fetch(`https://sports-blitz-camp-server.vercel.app/classes/${_id}`, {
          method: "PATCH",
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(message)
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
           
            Swal.fire(
              "Feedback",
              "feedback Successfully Send .",
              "success"
            );
          }
        });
      
      }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-4">Provide Feedback on the Denied Class</h2>
            <div>
            <form
          onSubmit={handleSubmit(onSubmit)}
          className="  m-5 bg-slate-200 rounded-lg"
        >
          <div className="form-control w-full  p-3 ">
            <label className="label py-4">
              <span className="label-text font-bold text-lg">Feedback</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter your Feedback"
              {...register("feedback", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.feedback && (
              <span className="text-red-700">Feedback is required</span>
            )}
              <input type="submit" className="btn btn-md bg-slate-950 w-fit text-white mx-auto my-3 hover:bg-slate-800 " value="Send Feedback" />{" "}
          </div>

                </form>
            </div>
        </div>
    );
};

export default AdminFeedback;