import useInstructors from "../../Hooks/useInstructors";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    const topInstructors = instructors.slice(0,6);
    return (
        <div className="p-2 bg-slate-200">
            <h3 className="md:text-4xl text-2xl font-bold text-slate-800 text-center md:py-3 py-1">Popular Instructors</h3>
            <p className="text-center md:font-medium  md:text-lg text-sm md:p-4 p-2">Sports Blitz Camp`s popular instructors bring their expertise and passion to inspire young athletes, fostering skill development and a love for sports.</p>
          <div className="grid md:grid-cols-3 md:gap-5 md:pt-8 pt-2 gap-2">
            {
                topInstructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor} ></InstructorCard>)
            }
          </div>
        </div>
    );
};

export default PopularInstructors;
