import useInstructors from "../../Hooks/useInstructors";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    const topInstructors = instructors.slice(0,6);
    return (
        <div className="p-2">
            <h3 className="text-4xl font-bold text-amber-800 text-center py-3">Popular Instructors</h3>
            <p className="text-center font-medium text-lg p-4">Sports Blitz Camp`s popular instructors bring their expertise and passion to inspire young athletes, fostering skill development and a love for sports.</p>
          <div className="grid grid-cols-3 gap-5 pt-8">
            {
                topInstructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor} ></InstructorCard>)
            }
          </div>
        </div>
    );
};

export default PopularInstructors;
