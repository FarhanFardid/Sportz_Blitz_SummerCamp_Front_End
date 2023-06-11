import logo from '../assets/sports camp/Logo/logo-1.png'

const DashboardNav = () => {
    return (
        <div className='bg-slate-950 grid grid-cols-12 p-3 items-center justify-center'>
            <div className='col-span-3'>
                <img src={logo} alt="logo" className="md:w-20 md:h-20 md:p-1 w-12 h-12 rounded-full md:mr-3 ps-5 " />
            </div>
            <div className='col-span-9'><h2 className='text-cyan-500 font-bold text-4xl text-center'>Sportz Blitz Summer Camp</h2>
            <p className='text-white text-center font-bold text-2xl'>DashBoard</p></div>
        </div>
    );
};

export default DashboardNav;