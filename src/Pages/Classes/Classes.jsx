import useClasses from "../../Hooks/useClasses";
import ClassViewCard from "./ClassViewCard";

const Classes = () => {
    const [classes] = useClasses();
    
    return (
        <div className="bg-slate-200">
            <h3 className="text-4xl font-bold py-5 text-center text-amber-800"> Approved Classes of Sportz Blitz Camp</h3>
            <p className="text-center text-lg p-5">
            Sports Blitz Camp offers a comprehensive selection of approved classes designed to ignite the passion and enhance the skills of sports enthusiasts. With a diverse range of offerings, the camp ensures that participants have ample opportunities to explore various sports disciplines and uncover their true athletic potential.</p>
<div className="grid grid-cols-3 gap-5 ">
    {
        classes.map(cls => <ClassViewCard key={cls._id} cls={cls}></ClassViewCard> )
    }
</div>
        </div>
    );
};

export default Classes;