import { Link } from "react-router-dom";
import AuthDetails from "./AuthDetails";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


function Header() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            }
            else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    return (
        <div className="flex bg-[#5087D0] font-fredoka items-center px-[10%] py-[12px] text-yellow-500 tracking-widest">
            <Link to="../" className="font-bold text-[36px] drop-shadow-lg flex">StoryQuest
                <img src="../images/star.png" className="w-[50px] drop-shadow-lg"></img>
            </Link>
            {authUser ? <img src="images/menu-burger.png"></img> 
            : <Link to="../Login" className="text-[20px] px-[34px] py-[10px] text-black bg-yellow-500 border-yellow-600 border-[4px] hover:bg-yellow-600 transition-all duration-200 rounded-[16px] drop-shadow-lg ml-auto">Log In</Link>}
            
        </div>
    )
}

export default Header;