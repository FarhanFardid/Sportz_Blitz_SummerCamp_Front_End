import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";


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
            }
        ]
    }
 ])
 export default router;
