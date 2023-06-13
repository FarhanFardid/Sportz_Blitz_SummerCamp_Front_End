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
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import AdminFeedback from "../Pages/Dashboard/AdminFeedback";
import UpdateClass from "../Pages/Dashboard/UpdateClass";
import Payment from "../Pages/Dashboard/Payment";


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
            element:<AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
        },
        {
            path: 'manageUsers',
            element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
        },
        {
          path: 'feedback/:id',
          element:<AdminRoutes><AdminFeedback></AdminFeedback></AdminRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/classes/${params.id}`)
        },
        {
            path: 'addClasses',
            element:<InstructorRoutes><AddClasses></AddClasses></InstructorRoutes>
        },
        {
            path: 'myClasses',
            element:<InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
        },
        {
             path:'updateClass/:id',
             element:<InstructorRoutes><UpdateClass></UpdateClass></InstructorRoutes>,
             loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
             
        },
        {
            path: 'selectedClasses',
            element:<SelectedClasses></SelectedClasses>
        },
        {
            path: 'enrolledClasses',
            element: <EnrolledClasses></EnrolledClasses>
        },
        {
            path: 'payment/:id',
            element: <Payment></Payment>,
            loader: ({params}) => fetch(`http://localhost:5000/cart/${params.id}`)
        }
     ]
    },
    {
path: '*',
element:<Error></Error>
    }
 ])
 export default router;
