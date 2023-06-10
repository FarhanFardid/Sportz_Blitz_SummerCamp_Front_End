import { Link } from 'react-router-dom';
import error from '../../assets/sports camp/Gallery/error.png'
import { FaArrowLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div className='relative'>
          <img src={error} alt="error image" className='w-full h-fit' />
          <button className='bg-amber-800 font-bold text-white p-2 rounded-md absolute top-8 left-10' > <Link to="/"><FaArrowLeft className='inline'/> Back to Home</Link></button>
        </div>
    );
};

export default Error;