import certificate from '../../assets/sports camp/Achievements/certificate.jpg'
import career from '../../assets/sports camp/Achievements/career.jpg' 
import practical from '../../assets/sports camp/Achievements/practical.jpg'

const Achievement = () => {
    return (
        <div className='py-5 mx-auto'>
             <h2 className="md:text-4xl text-2xl font-bold text-slate-800 text-center md:py-5 py-1 ">
        Camp Achievements
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3'>
      <div className="card md:w-96 w-84 md:h-auto h-72 bg-base-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={certificate} alt="certificate" className="rounded-xl border-black border md:w-72 w-60 h-44 md:h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title md:text-xl text-lg font-bold">Certificate</h2>
    <p className='text-xs md:text-base'>Receive a Professional Sports Training Certificate </p>
    
  </div>
</div>
      <div className="card md:w-96 w-84 md:h-auto h-72 bg-base-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={career} alt="career" className="rounded-xl border-black border md:w-72 md:h-52 w-60 h-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold md:text-xl text-lg ">Career Opportunity</h2>
    <p className='text-xs md:text-base'>Get an Opportunity to Build Career in Sports </p>
    
  </div>
</div>
      <div className="card md:w-96 w-84 md:h-auto h-72 bg-base-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={practical} alt="practical" className="rounded-xl border-black border  md:w-72 w-60 h-44 md:h-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold md:text-xl text-lg ">Practical Experience</h2>
    <p className='text-xs md:text-base'>Achieve Practical Learning Experience of Sports </p>
    
  </div>
</div>
      </div>
            
        </div>
    );
};

export default Achievement;