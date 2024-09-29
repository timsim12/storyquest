import StarImage from "./StarImage";
import StarMeter from "./StarMeter";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from "react";
import { getDocumentData } from "../firebase";

function StarGoals() {
    const auth = getAuth();
    const user = auth.currentUser;

    const [userDocs, setUserDocs] = useState(null);


    useEffect(() => {
        // Set up an authentication state observer
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User is logged in
                try {
                    const currUserDocs = await getDocumentData(user.email);
                    if (currUserDocs) {
                        setUserDocs(currUserDocs);
                    }
                } catch (error) {
                    console.error("Error fetching document data:", error);
                }
            } else {
                // No user is logged in
                console.log("No user is logged in");
            }
        });

        // Clean up the observer on component unmount
        return () => unsubscribe();
    }, [auth]);

    
    return (
        <>
            <div className="items-center bg-white p-[20px] mx-[10%] rounded-[20px] text-[18px] mt-[20px] px-[60px]">
                {userDocs ? (
                        <>
                            <h1 className="font-semibold text-[22px] text-yellow-500">Hi, {userDocs.childName}</h1>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                <div className="flex">
                    <p>Your next reward is:&nbsp;</p>
                    <p className="font-semibold text-[#5087D0] mb-[8px]">5 pieces of candy</p>
                    <p>!</p>
                </div>
                <div className="grid grid-cols-fit text-center bg-yellow-400 rounded-[20px] p-[8px]">
                    <div className="flex items-center mx-auto">
                        <p>Total </p>
                        <StarImage />
                        <p>: 5</p>
                    </div>
                    <div className="flex items-center mx-auto">
                        <p>Current Goal:&nbsp;</p>
                        <StarMeter collected={5} total={10} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarGoals;