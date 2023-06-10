import logo from '../assets/sports camp/Logo/logo-1.png'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className=" grid md:grid-cols-4 bg-black md:p-12 p-5 text-white  ">
        <div className="footer__logo items-center justify-center flex flex-col space-y-2">
          <img src={logo} className='w-12 h-12 rounded-full mx-auto' alt="Sportz blitz Logo" />
          <h2 className='text-lg font-bold text-amber-800'>Sportz Blitz Summer Camp</h2>
        </div>
        <div className="footer__contact items-center justify-center flex flex-col space-y-2">
          <h3 className='font-bold text-amber-800 text-base'>Contact Information</h3>
          <p className='text-xs font-medium'>Phone: 123-456-7890</p>
          <p className='text-xs font-medium'>Email: sportzblitz@camp.com</p>
        </div>
        <div className="footer__social items-center justify-center flex flex-col space-y-2">
          <h3 className="font-bold text-amber-800 text-base">Follow Us</h3>
          <ul className='flex '>
            <li className='pr-2'>
              <a href="#">
                <FaFacebookSquare className='w-4 h-4' />
              </a>
            </li>
            <li className='pr-2'>
              <a href="#">
               <FaInstagramSquare className='w-4 h-4'/>
              </a>
            </li>
            <li className='pr-2'>
              <a href="#" >
           <FaTwitterSquare className='w-4 h-4'/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__address items-center justify-center flex flex-col space-y-2">
          <h3 className="font-bold text-amber-800 text-base">Address</h3>
          <p className='text-xs font-medium'>British Columbia University, London, UK</p>
        </div>
        <div className="md:mt-5 col-span-4 text-center">
          <p className="font-bold text-white  text-lg ">&copy; {new Date().getFullYear()} Sportz Blitz Summer Camp. All rights reserved.</p>
          <p className="font-bold text-white  text-lg ">Developed By &copy; <span className="text-amber-800">Farhan Fardid</span>  </p>
        </div>
      </footer>
    );
};

export default Footer;