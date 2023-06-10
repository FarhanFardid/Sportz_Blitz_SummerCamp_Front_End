import galImg1 from "../../assets/sports camp/Gallery/basketball-3.png";
import galImg2 from "../../assets/sports camp/Gallery/cricket-3.png";
import galImg3 from "../../assets/sports camp/Gallery/volleyball-3.png";
import galImg4 from "../../assets/sports camp/Gallery/Tennis-2.png";
import galImg5 from "../../assets/sports camp/Gallery/hockey-4.png";
import galImg6 from "../../assets/sports camp/Gallery/football-4.png";
import galImg7 from "../../assets/sports camp/Gallery/baseball-3.png";


const Gallery = () => {
  return (
    <div>
        <h3 className="text-3xl font-bold text-amber-800 text-center py-3" >Camp Gallery </h3>
      <div className="grid grid-cols-3 gap-3 p-1">
      <div className="flex flex-col gap-2">
          <div>
            <img src={galImg1} alt="gallery-4" className="rounded-md" />
          </div>
          <div>
            <img src={galImg4} alt="gallery-5" className="rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div ><img src={galImg7} alt="gallery-3" className="w-full h-full rounded-md" /></div>
            <div ><img src={galImg2} alt="gallery-6" className="w-full h-full rounded-md" /></div>
            <div className="col-span-2"><img src={galImg3} alt="gallery-7"  className="w-full h-full rounded-md" /></div>
          
          
        </div>
        <div className="flex flex-col gap-2">
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
