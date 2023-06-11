import useInstructors from "../../Hooks/useInstructors";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    return (
        <div>
            <h3 className="text-3xl font-bold text-amber-800 text-center py-2">Popular Instructors</h3>
            <p>Instructors : {instructors.length}</p>
        </div>
    );
};

export default PopularInstructors;
