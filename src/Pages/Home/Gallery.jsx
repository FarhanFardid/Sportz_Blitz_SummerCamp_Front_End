import galImg1 from "../../assets/sports camp/Gallery/basketball-3.png";
import galImg2 from "../../assets/sports camp/Gallery/cricket-3.png";
import galImg3 from "../../assets/sports camp/Gallery/volleyball-3.png";
import galImg4 from "../../assets/sports camp/Gallery/Tennis-2.png";
import galImg5 from "../../assets/sports camp/Gallery/hockey-4.png";
import galImg6 from "../../assets/sports camp/Gallery/football-4.jpg";
import galImg7 from "../../assets/sports camp/Gallery/baseball-3.png";


const Gallery = () => {
  return (
    <div className="p-2">
        <h3 className="md:text-4xl text-2xl font-bold text-slate-800 text-center md:py-5 py-2" >Camp Gallery </h3>
      <div className="grid grid-cols-3 md:gap-3 gap-1 pt-6">
      <div className="flex flex-col md:gap-2 gap-1">
          <div>
            <img src={galImg1} alt="gallery-4" className="rounded-md" />
          </div>
          <div>
            <img src={galImg4} alt="gallery-5" className="rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:gap-2 gap-1">
            <div ><img src={galImg7} alt="gallery-3" className="w-full h-full rounded-md" /></div>
            <div ><img src={galImg2} alt="gallery-6" className="w-full h-full rounded-md" /></div>
            <div className="col-span-2"><img src={galImg3} alt="gallery-7"  className="w-full h-full rounded-md" /></div>
          
          
        </div>
        <div className="flex flex-col md:gap-2 gap-1">
          <div>
            <img src={galImg5} alt="gallery-4" className="rounded-md" />
          </div>
          <div>
            <img src={galImg6} alt="gallery-5" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
