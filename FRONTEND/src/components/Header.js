import { Link, useNavigate } from "react-router-dom";
import AuthDetails from "./AuthDetails";
import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


function Header() {
    const [authUser, setAuthUser] = useState(null);
    const Menu = ["Parent Corner"];
    const [open, setOpen] = useState(false);

    const menuRef = useRef();
    const imgRef = useRef();
    const navigate = useNavigate();

    window.addEventListener("click", (e) => {
        if(e.target !== imgRef.current) {
            setOpen(false);
        }
    });

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

    const handleProfile = () => {
        window.location = "/ParentCorner";
    };


    return (
        <>
            <div className="relative flex bg-[#5087D0] font-fredoka items-center px-[10%] py-[12px] text-yellow-500 tracking-widest">
            <Link to="../" className="font-bold text-[36px] drop-shadow-lg flex">StoryQuest
                <img src="../images/star.png" className="w-[50px] drop-shadow-lg"></img>
            </Link>
            {authUser ? <img ref={imgRef} onClick={()=>setOpen(!open)}src="images/menu-burger.png" className=" cursor-pointer w-[44px] hover:bg-[#406ca7] transition-all duration-200 rounded-[12px] drop-shadow-lg ml-auto"></img> 
            : <Link to="../Login" className="text-[20px] px-[34px] py-[10px] text-black bg-yellow-500 border-yellow-600 border-[4px] hover:bg-yellow-600 transition-all duration-200 rounded-[16px] drop-shadow-lg ml-auto">Log In</Link>}
            </div>
            {open && (
                <div className=" bg-white p-4 w-52 shadow-lg ml-auto mr-[10%]">
                <ul>
                    {Menu.map((menu) => (
                        <li ref={menuRef} onClick={() => {
                            setOpen(false);
                            handleProfile();
                        }}
                             className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100 text-center"key={menu}>{menu}</li>
                    ))}
                </ul>
                <ul><AuthDetails/></ul>
            </div>
            )}
        </>
    )
}

export default Header;