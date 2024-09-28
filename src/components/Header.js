import { Link } from "react-router-dom";
import AuthDetails from "./AuthDetails";

function Header() {
    return (
        <div className="flex bg-[#5087D0] font-fredoka items-center px-[10%] py-[12px] text-yellow-500 tracking-widest">
            <Link to="../" className="font-bold text-[36px] drop-shadow-lg">StoryTale</Link>
            <Link to="../Login" className="text-[20px] px-[34px] py-[10px] text-black bg-yellow-500 border-yellow-600 border-[4px] hover:bg-yellow-600 transition-all duration-200 rounded-[16px] drop-shadow-lg ml-auto">Login</Link>
        </div>
    )
}

export default Header;