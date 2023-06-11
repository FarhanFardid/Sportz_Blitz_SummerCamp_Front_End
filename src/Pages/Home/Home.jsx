import Gallery from "./Gallery";
import HomeSlider from "./HomeSlider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";



const Home = () => {
    return (
        <div>
           <HomeSlider></HomeSlider>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Gallery></Gallery>
          
        </div>
    );
};

export default Home;