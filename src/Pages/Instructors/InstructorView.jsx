

const InstructorView = ({instructor}) => {
    const {name,image,sports,email} = instructor;
    return (
        <div className="card w-80 md:w-full bg-base-100 shadow-xl rounded-md mx-auto py-2">
        <figure className="md:w-full    "><img src={image} alt="images" className="md:h-64 h-48 md:w-full w-72" /></figure>
        <div className="card-body text-center bg-slate-300 text-black space-y-2 rounded-md">
          <h2 className="card-title mx-auto">Name: {name}</h2>
          <p>Email : {email}</p>
          <div className="card-actions text-center">
            <button className="btn bg-slate-800 mx-auto font-bold text-cyan-100 w-32 hover:bg-slate-900">{sports}</button>
          </div>
        </div>
      </div>
    );
};

export default InstructorView;