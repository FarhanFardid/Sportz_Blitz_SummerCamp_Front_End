import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ban1 from '../../assets/sports camp/Banner/Volleyball-2.png'
import ban2 from '../../assets/sports camp/Banner/football-2.png'
import ban3 from '../../assets/sports camp/Banner/baseball-4.png'
import ban4 from '../../assets/sports camp/Banner/cricket-4.png'
import ban5 from '../../assets/sports camp/Banner/Tennis-4.png'
import ban6 from '../../assets/sports camp/Banner/basketball-4.png'

const HomeSlider = () => {
    return (
        <Carousel className="autoPlay infiniteLoop ">
        <div className="h-[650px]">
            <img src={ban1} />
          
        </div>
        <div className="h-[650px]">
            <img src={ban2} />
       
        </div>
        <div  className="h-[650px]">
            <img src={ban3} />
           
        </div>
        <div className="h-[650px]">
            <img src={ban4} />
          
        </div>
        <div className="h-[650px]">
            <img src={ban5} />
       
        </div>
        <div className="h-[650px]">
            <img src={ban6} />
           
        </div>
    </Carousel>
    );
};

export default HomeSlider;