import Header from "../components/Header";
import StarMeter from "../components/StarMeter";
import { books } from "../data";
import { Link } from "react-router-dom";

function ParentCorner() {
    const removeSpaces=(text)=> {
        let noSpace = text.replace(/\s+/g, '-');
        return noSpace
    }

    const stars = 10;
    const goals = [
        { task: "5 pieces of candy", stars: 4 },
        { task: "new toy", stars: 9 },
        { task: "go to the beach", stars: 11 }
    ];

    // const completedGoals=()=> {
    //     let stars = 10;
    //     let goals = [
    //         { task: "5 pieces of candy", stars: 4 },
    //         { task: "new toy", stars: 9 },
    //         { task: "go to the beach", stars: 11 }
    //     ];
    //     var completedGoals = []
    //     for (let goal of goals) {
    //         if (stars >= goal.stars) {
    //             completedGoals.push({ task: goal.task, stars: goal.stars});
    //         }
    //     }
    //     return completedGoals;
    // }

    return (
        <div className="font-fredoka tracking-widest">
            <Header />
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg mb-[24px]">Your child's progress</h1>
                <h1 className="text-[22px] font-bold text-left text-[#5087D0] mb-[24px]">Goals</h1>
                <div className="grid grid-cols-fit gap-[15px]">
                    {goals.map((goal, idx) => 
                        <div className="flex">
                            <StarMeter collected={stars} total={goal.stars} />
                            <p className="text-[18px] font-semibold ml-[24px] mt-[9px]">{goal.task}</p>  
                        </div>
                    )}
                </div>
                <div className="pt-[14px] pb-[14px] mt-[24px] mb-[24px]">
                    <Link to="/Books" className="bg-yellow-400 p-[14px] rounded-[14px] hover:bg-yellow-600 transition-all duration-200">Add goal</Link>
                </div>
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
