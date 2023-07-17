import Achievement from "./Achievement";
import Gallery from "./Gallery";
import HomeSlider from "./HomeSlider";
import HotLine from "./HotLine";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Reg from "./Reg";



const Home = () => {
    return (
        <div>
           <HomeSlider></HomeSlider>
           <Achievement></Achievement>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Reg></Reg>
           <HotLine></HotLine>
           
          
           <Gallery></Gallery>
          
        </div>
    );
};

export default Home;