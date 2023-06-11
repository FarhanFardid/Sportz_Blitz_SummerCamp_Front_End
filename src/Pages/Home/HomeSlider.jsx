import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ban1 from "../../assets/sports camp/Banner/Volleyball-2.png";
import ban2 from "../../assets/sports camp/Banner/football-2.png";
import ban3 from "../../assets/sports camp/Banner/baseball-4.png";
import ban4 from "../../assets/sports camp/Banner/cricket-4.png";
import ban5 from "../../assets/sports camp/Banner/Tennis-4.png";
import ban6 from "../../assets/sports camp/Banner/basketball-4.png";


const HomeSlider = () => {
  return (
    <Carousel className="autoPlay infiniteLoop ">
      <div className="h-[650px] relative  ">
        <div className="absolute end-12 top-48  p-8 m-5 text-black bg-white bg-opacity-40 rounded-lg max-w-xl text-left">
          <h2 className="text-3xl font-bold text-red-700 my-4">
            Unleash Your Inner Athlete at Sportz Blitz Summer Camp
          </h2>
          <p className="text-lg  py-2">
            Get ready for an action-packed summer of sports and excitement at
            Sportz Blitz Summer Camp! Join us for an unforgettable experience
            filled with thrilling games, skill development, and lifelong
            memories
          </p>
          <button className="btn font-bold text-white bg-slate-800 hover:bg-slate-950 rounded-lg">Explore Sportz Blitz</button>
        </div>

        <img src={ban1} />
      </div>
      <div className="h-[650px] relative">
      <div className="absolute end-12 top-48  p-8 m-5 text-black bg-white bg-opacity-40 rounded-lg max-w-xl text-left">
          <h2 className="text-3xl font-bold text-red-700 my-4">
            Unleash Your Inner Athlete at Sportz Blitz Summer Camp
          </h2>
          <p className="text-lg  py-2">
            Get ready for an action-packed summer of sports and excitement at
            Sportz Blitz Summer Camp! Join us for an unforgettable experience
            filled with thrilling games, skill development, and lifelong
            memories
          </p>
          <button className="btn font-bold text-white bg-slate-800 hover:bg-slate-950 rounded-lg">Explore Sportz Blitz</button>
        </div>
        <img src={ban2} />
      </div>
      <div className="h-[650px] relative">
    
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
