import useClasses from "../../Hooks/useClasses";
import ClassCard from "./ClassCard";


const PopularClasses = () => {
    const [classes] = useClasses();
    const topClasses = classes.slice(0,6);
    return (
        <div className="p-2">
        <h3 className="text-4xl font-bold text-amber-800 text-center py-3">Popular Classes</h3>
        <p className="text-center font-medium text-lg p-4">Sports Blitz Camp offers a diverse range of approved classes, fueling athletes` passion and honing their skills. From fundamentals to advanced training, participants thrive under the guidance of experienced instructors</p>
      <div className="grid grid-cols-3 gap-3">
        {
            topClasses.map(cls => <ClassCard key={cls._id} cls={cls} ></ClassCard>)
        }
      </div>
    </div>
    );
};

export default PopularClasses;