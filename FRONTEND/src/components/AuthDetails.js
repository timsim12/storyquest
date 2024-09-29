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
        <div className="flex justify-center">{authUser ? <><button onClick={userSignOut} className="p-2 text-lg cursor-pointer rounded hover:bg-red-100 w-[100%]">Sign Out</button></> : <p>Not Signed In!</p>} 
        </div>
    )
}

export default AuthDetails