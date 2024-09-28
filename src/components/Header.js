import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex bg-[#5087D0] font-fredoka items-center px-[10%] py-[12px] text-yellow-500 tracking-widest">
            <Link to="../" className="flex-1 font-bold text-[36px] drop-shadow-lg">StoryTale</Link>
            <button className="px-[34px] py-[10px] text-black bg-yellow-500 border-yellow-600 border-[4px] hover:bg-yellow-600 transition-all duration-200 rounded-[16px] drop-shadow-lg">
                <Link to="../Login" className="text-[20px]">Login</Link>
            </button>
        </div>
    )
}

export default Header;