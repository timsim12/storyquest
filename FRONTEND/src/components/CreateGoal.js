import { useState } from "react";
import Input from "../components/Input";


function CreateGoal({isPresented}) {
    const [goalText, setGoalText] = useState('');
    const [stars, setStars] = useState('');

    const addGoal = (e) => {
    }

    if (isPresented) {
        return (
            <>
                <form className="flex flex-col mt-[24px] mb-[-16px]" onSubmit={addGoal}>
                    <Input type="goalText" id="goalText" label="Goal" value={goalText} onChange={(e) => setGoalText(e.target.value)}/>
                    <Input type="stars" id="stars" label="Stars" value={stars} onChange={(e) => setStars(e.target.value)}/>
                    {/* <input type="submit" value="Log in" className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] mt-[20px] hover:bg-[#6eb98c] transition-all duration-200 text-[18px]" /> */}
                </form>
            </>
        )
    } else {
        return null;
    }
}

export default CreateGoal;