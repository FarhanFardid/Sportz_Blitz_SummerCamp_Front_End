import { Outlet } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;