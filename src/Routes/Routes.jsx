import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AddClasses from "../Pages/Dashboard/AddClasses";
import MyClasses from "../Pages/Dashboard/MyClasses";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses";
import PrivateRoutes from "./PrivateRoutes";


 const router = createBrowserRouter ([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'instructors',
                element:<Instructors></Instructors>
            },
            {
                path:'classes',
                element:<Classes></Classes> 
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },

        ],
        
    },
    {
     path: 'dashboard',
     element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
     children:[
        {
            path: 'manageClasses',
            element:<ManageClasses></ManageClasses>
        },
        {
            path: 'manageUsers',
            element:<ManageUsers></ManageUsers>
        },
        {
            path: 'addClasses',
            element:<AddClasses></AddClasses>
        },
        {
            path: 'myClasses',
            element:<MyClasses></MyClasses>
        },
        {
            path: 'selectedClasses',
            element:<SelectedClasses></SelectedClasses>
        },
        {
            path: 'enrolledClasses',
            element: <EnrolledClasses></EnrolledClasses>
        }
     ]
    },
    {
path: '*',
element:<Error></Error>
    }
 ])
 export default router;
