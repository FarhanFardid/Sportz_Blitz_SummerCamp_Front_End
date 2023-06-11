import useInstructors from "../../Hooks/useInstructors";
import InstructorView from "./InstructorView";

const Instructors = () => {
    const [instructors] = useInstructors();
    return (
        <div className="bg-slate-200">
            <h3 className="text-4xl font-bold py-5 text-center text-amber-800"> Instructors of Sportz Blitz Camp</h3>
            <p className="text-center text-lg p-5">
The instructors at Sports Blitz Camp are a dynamic team of passionate individuals dedicated to shaping the next generation of athletes. With diverse backgrounds and expertise in various sports disciplines, they provide a comprehensive and well-rounded sports education experience. These instructors possess a deep understanding of the games they teach and excel at breaking down complex techniques into accessible concepts. Their patient and supportive approach fosters an inclusive and encouraging environment for campers to learn and grow.</p>
<div className="grid grid-cols-3 gap-5 py-5">
    {
        instructors.map(instructor =><InstructorView key={instructor._id} instructor={instructor}></InstructorView> )
    }
</div>
        </div>
    );
};

export default Instructors;