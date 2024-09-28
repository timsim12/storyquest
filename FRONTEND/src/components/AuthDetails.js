import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from "../firebase";

const AuthDetails = () => {
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
        }
    }, []);

        const userSignOut = () => {
            signOut(auth).then(() => {
                console.log('signed out successfully');
            }).catch(error => console.log(error))
        }
    return (
        <div className="flex justify-center">{authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut} className="bg-red-400 hover:bg-red-300 rounded-[20px] transition-all duration-200 px-[12px]">Sign Out</button></> : <p>Not Signed In!</p>} 
        </div>
    )
}

export default AuthDetails