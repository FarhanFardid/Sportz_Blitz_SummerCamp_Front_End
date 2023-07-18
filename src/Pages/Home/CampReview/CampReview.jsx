
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import banner from '../../../assets/sports camp/Banner/campBanner.jpg'
import golf from '../../../assets/sports camp/Banner/Golf-3.jpg' 
import hockey from '../../../assets/sports camp/Banner/hockey-3.jpg' 
import football from '../../../assets/sports camp/Football/football-5.jpg'
import camp from '../../../assets/sports camp/Gallery/SportsCamp.png'
import tennis from '../../../assets/sports camp/Tennis/Tennis-3.jpg'

const CampReview = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 3.5,
          spacing: 15,
        },
      })
    return (
        <div className="bg-slate-300">
           <h3 className="md:text-4xl text-2xl font-bold text-slate-800 text-center md:py-3 py-1">Camp Review of 2022</h3>
               <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <p className="absolute top-3 left-2 md:text-xl text-sm font-bold text-white">Camp 2022</p>
        <img src={banner} alt="camp banner" className="w-full md:h-full h-3/5" />
      </div>
      <div className="keen-slider__slide number-slide2"><p className="absolute top-3 left-2 md:text-xl text-sm font-bold text-slate-900">Golf</p>
        <img src={golf} alt="golf" className="w-full md:h-full h-3/5" /></div>
      <div className="keen-slider__slide number-slide3"><p className="absolute top-3 left-2 md:text-xl text-sm font-bold">Hockey</p>
        <img src={hockey} alt="hockey" className="w-full md:h-full h-3/5" /></div>
      <div className="keen-slider__slide number-slide4"><p className="absolute top-3 left-2 md:text-xl text-sm font-bold ">Football</p>
        <img src={football} alt="football" className="w-full md:h-full h-3/5" /></div>
      <div className="keen-slider__slide number-slide5"><p className="absolute top-3 left-2 md:text-xl text-sm font-bold">Camp</p>
        <img src={camp} alt="camp " className="w-full md:h-full h-3/5" /></div>
      <div className="keen-slider__slide number-slide6"><p className="absolute top-3 left-2 md:text-xl text-sm font-bold text-yellow-600">Tennis</p>
        <img src={tennis} alt="tennis" className="w-full md:h-full h-3/5" /></div>
    </div>
        </div>
    );
};

export default CampReview;