import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

import {
  FaHome,
  FaUserEdit,
  FaUserTie,
  FaBookOpen,
  FaSwatchbook,
  FaBookReader,
  FaBookmark,
  FaMoneyCheckAlt,
  FaMoneyBill,
} from "react-icons/fa";
import { ImBook } from "react-icons/im";

import DashboardNav from "../Shared/DashboardNav";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  console.log(isAdmin);

  console.log(isInstructor);
  return (
    <div>
      <DashboardNav></DashboardNav>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-fit">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-400 text-black ps-5 min-h-full ">
            <h2 className="text-3xl font-semibold text-center text-slate-950 py-3">
              Sportz Blitz Summer Camp
            </h2>
            {isAdmin ? (
              <>
                <h3 className="text-xl font-semibold text-center p-2">
                  Admin DashBoard
                </h3>
                <li>
                  <NavLink to="/dashboard/manageClasses" className="font-bold">
                    <ImBook className="w-6 h-6 text-slate-950"></ImBook>Manage
                    Classes
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manageUsers" className="font-bold">
                    <FaUserEdit className="w-6 h-6 text-slate-950" />
                    Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <h3 className="text-xl font-semibold text-center p-2">
                  Instructor DashBoard
                </h3>
                <li>
                  <NavLink to="/dashboard/addClasses" className="font-bold">
                    <FaSwatchbook className="w-6 h-6 text-slate-950"></FaSwatchbook>
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses" className="font-bold">
                    <FaBookReader className="w-6 h-6 text-slate-950" />
                    My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-center p-2">
                  Student DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/selectedClasses"
                    className="font-bold"
                  >
                    <FaBookmark className="w-6 h-6 text-slate-950"></FaBookmark>
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrolledClasses"
                    className="font-bold"
                  >
                    <FaMoneyCheckAlt className="w-6 h-6 text-slate-950" />
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/history"
                    className="font-bold"
                  >
                    <FaMoneyBill className="w-6 h-6 text-slate-950" />
                    My Payment History
                  </NavLink>
                </li>
              </>
            )}
            <hr className="my-5" />

            <li>
              <NavLink to="/" className="font-bold">
                <FaHome className="w-6 h-6 text-slate-950"></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors" className="font-bold">
                <FaUserTie className="w-6 h-6 text-slate-950" />
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes" className="font-bold">
                <FaBookOpen className="w-6 h-6 text-slate-950" />
                Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
