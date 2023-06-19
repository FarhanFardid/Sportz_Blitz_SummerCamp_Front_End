import useClasses from "../../Hooks/useClasses";
import ClassViewCard from "./ClassViewCard";

const Classes = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(cls => cls.status === "approved")
    // console.log(approvedClasses);
    
    return (
        <div className="bg-slate-200">
            <h3 className="md:text-4xl text-2xl font-bold md:py-5 py-2 text-center text-slate-800"> Approved Classes of Sportz Blitz Camp</h3>
            <p className="text-center md:text-lg text-sm md:p-5 p-2">
            Sports Blitz Camp offers a comprehensive selection of approved classes designed to ignite the passion and enhance the skills of sports enthusiasts. With a diverse range of offerings, the camp ensures that participants have ample opportunities to explore various sports disciplines and uncover their true athletic potential.</p>
<div className="grid grid-cols-1 md:gap-y-5 gap-y-2 md:p-5 p-2">
    {
        approvedClasses.map(cls => <ClassViewCard key={cls._id} cls={cls}></ClassViewCard> )
    }
</div>
        </div>
    );
};

export default Classes;