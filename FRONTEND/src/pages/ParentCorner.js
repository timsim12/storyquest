import Header from "../components/Header";
import StarGoals from '../components/StarGoals';

function ParentCorner() {
    return (
        <div className="font-fredoka tracking-widest">
            <Header /> 
            {/* maybe remove star goals since this is for the parent (or modify it) */}
            <StarGoals />
        </div>
    )
}

export default ParentCorner;