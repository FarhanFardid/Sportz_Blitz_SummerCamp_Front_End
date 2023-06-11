import Gallery from "./Gallery";
import HomeSlider from "./HomeSlider";
import PopularInstructors from "./PopularInstructors";



const Home = () => {
    return (
        <div>
           <HomeSlider></HomeSlider>
           <PopularInstructors></PopularInstructors>
           <Gallery></Gallery>
          
        </div>
    );
};

export default Home;