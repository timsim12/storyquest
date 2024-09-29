import Header from "../components/Header";
import StarImage from "../components/StarImage";
import { books } from "../data";
import { Link } from "react-router-dom";

function ParentCorner() {
    const removeSpaces=(text)=> {
        let noSpace = text.replace(/\s+/g, '-');
        return noSpace
    }

    const completedGoals=()=> {
        let stars = 10;
        let goals = {"5 pieces of candy" : 4, "new toy" : 9, "beach" : 11};
        let completedGoals = []
        for (const [key, value] of Object.entries(goals)) {
            if (stars >= value) {
                completedGoals.push(key)
            }
        }
        return completedGoals;
    }

    return (
        <div className="font-fredoka tracking-widest">
            <Header />
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg mb-[24px]">Your child's progress</h1>
                <h1 className="text-[22px] font-bold text-left text-[#5087D0] mb-[24px]">Completed Goals</h1>
                {completedGoals().map((goal, idx) => 
                    <div className="flex">
                        <StarImage />
                        <p className="text-[18px] font-semibold mb-[24px] ml-[24px]">{goal}</p>  
                    </div>
                )}
                <h1 className="text-[22px] font-bold text-left text-[#5087D0] mb-[24px]">Recently Read</h1>
                <div>
                    {books.map((book, idx) => 
                        <Link to={`../books/${removeSpaces(book.title)}`}>
                            <div className="capitalize transition-all duration-200 text-center p-[20px] ">
                                <div className="flex">
                                    <img src={`/covers/${book.cover}`} alt={book.title} className="rounded-[20px] mb-[12px] max-w-[200px]"/>
                                    <div className="flex-1 text-left ml-[20px]">
                                        <h3 className="text-[20px] font-bold mb-[20px]">{book.title}</h3>
                                        <h1>{`by: ${book.author}`}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
                <h1 className="text-[22px] font-bold text-left text-[#5087D0] mb-[24px]">Completed Goals</h1>
            </div>
        </div>
    )
}

export default ParentCorner;
