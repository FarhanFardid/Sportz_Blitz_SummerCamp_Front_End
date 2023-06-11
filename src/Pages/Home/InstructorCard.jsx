const InstructorCard = ({ instructor }) => {
  const { image, sports } = instructor;
  return (
    <div className="card  w-full bg-slate-600">
      <figure className=" w-full ">
        <img src={image} alt="Instructor img" className="w-full h-72 rounded-lg " />
      </figure>
      <div className="card-body ">
        <h2 className="card-title mx-auto font-bold text-white">Sports: {sports}</h2>
      </div>
    </div>
  );
};

export default InstructorCard;
