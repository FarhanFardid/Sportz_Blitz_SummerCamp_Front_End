const InstructorCard = ({ instructor }) => {
  const { image, sports } = instructor;
  return (
    <div className="card  md:w-full w-80 mx-auto  bg-slate-600 relative">
      <figure className=" md:w-full   ">
        <img src={image} alt="Instructor img" className="md:w-full md:h-80  h-56 w-72 rounded-lg " />
      </figure>
      <button className="btn btn-xs md:btn-md bg-slate-800 font-bold text-white absolute w-24 hover:bg-slate-950 top-4 right-4 ">{sports}</button>
    </div>
  );
};

export default InstructorCard;
