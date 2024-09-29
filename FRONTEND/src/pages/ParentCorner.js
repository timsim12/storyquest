import Header from "../components/Header";
import StarMeter from "../components/StarMeter";
import CreateGoal from "../components/CreateGoal";
import CancelButton from "../components/CancelButton";
import StarImage from "../components/StarImage";
import { books } from "../data";    // replace with fetch from database
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function ParentCorner() {
    const removeSpaces = (text) => {
        let noSpace = text.replace(/\s+/g, '-');
        return noSpace
    }

    // replace with fetch from database
    const stars = 10;
    const goals = [
        { task: "5 pieces of candy", stars: 4 },
        { task: "new toy", stars: 9 },
        { task: "go to the beach", stars: 11 }
    ];


    const [creatingGoal, setGoalState] = useState(false);
    const createGoal = () => {
        if (setGoalState != true) {
            setGoalState(true);
        } else {
            // save to database
        }
    }

    const cancelGoal = () => {
        setGoalState(false);
    }

    return (
        <div className="font-fredoka tracking-widest">
            <Header />
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <div className="flex">
                    <h1 className="flex-1 text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg mb-[24px]">Your child's progress</h1>
                    <Link to="../Parent-Settings">
                        <img src="/images/settings.png" className="w-[34px] h-fit mt-[10px]"></img>
                    </Link>
                </div>
                <h1 className="text-[22px] font-bold text-left text-[#5087D0] mb-[24px]">Goals</h1>
                <div className="grid grid-cols-fit gap-[15px]">
                    {goals.map((goal, idx) => 
                        <div className="flex">
                            <StarMeter collected={stars} total={goal.stars} />
                            <p className="text-[18px] font-semibold ml-[24px] mt-[9px]">{goal.task}</p>  
                        </div>
                    )}
                </div>
                <CreateGoal isPresented={creatingGoal} />
                <div className="flex pt-[14px] pb-[14px] mt-[24px] mb-[24px]">
                    <button onClick={createGoal} className="bg-[#9DEEBD] p-[14px] rounded-[14px] hover:bg-[#6eb98c] transition-all duration-200">
                        Add goal
                    </button>
                    <button onClick={cancelGoal}>
                        <CancelButton isPresented={creatingGoal} />
                    </button>
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
                                        <div className="flex mt-[10px]">
                                            {Array.from({ length: book.stars}, (_, index) => (
                                                <StarImage className="w-[8px]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ParentCorner;
