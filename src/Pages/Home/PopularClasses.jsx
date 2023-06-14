import useClasses from "../../Hooks/useClasses";
import ClassCard from "./ClassCard";


const PopularClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(cls => cls.status === 'approved')
    const topClasses = approvedClasses.slice(0,6);
    return (
        <div className="md:p-3 p-1 bg-slate-100">
        <h3 className="md:text-4xl text-2xl font-bold text-slate-800 text-center md:py-3 py-1">Popular Classes</h3>
        <p className="text-center md:font-medium font-normal text-sm p-2 md:text-lg md:p-4">Sports Blitz Camp offers a diverse range of approved classes, fueling athletes` passion and honing their skills. From fundamentals to advanced training, participants thrive under the guidance of experienced instructors</p>
      <div className="grid md:grid-cols-3  gap-3 md:py-8 py-3 ">
        {
            topClasses.map(cls => <ClassCard key={cls._id} cls={cls} ></ClassCard>)
        }
      </div>
    </div>
    );
};

export default PopularClasses;