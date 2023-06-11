const InstructorCard = ({ instructor }) => {
  const { image, sports } = instructor;
  return (
    <div className="card  w-full bg-slate-600 relative">
      <figure className=" w-full ">
        <img src={image} alt="Instructor img" className="w-full h-72 rounded-lg " />
      </figure>
      <button className="btn bg-slate-800 font-bold text-white absolute w-24 hover:bg-slate-950 top-4 right-4 ">{sports}</button>
    </div>
  );
};

export default InstructorCard;
