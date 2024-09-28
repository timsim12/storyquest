import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex bg-[#5087D0] font-fredoka items-center px-[10%] py-[12px] text-yellow-500">
            <Link to="../" className="flex-1 font-bold text-[36px]">StoryTale</Link>
            <button className="border-[4px] px-[16px] py-[8px] border-[#3e6aa4] hover:bg-[#3e6aa4] hover:border-[#3e6aa4] transition-all duration-200 rounded-[12px]">
                <Link to="../Login" className="text-[20px]">Login</Link>
            </button>
        </div>
    )
}

export default Header;