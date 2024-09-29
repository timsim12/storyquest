import Header from "../components/Header";
import Input from "../components/Input";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getDocumentData } from "../firebase";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function ParentSettings() {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();

    const [childName, setChildName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');
    const [stars, setStars] = useState('');

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

    


    const updateSettings = (value) => {
        value.preventDefault();
    }

    const handleSubmit = () => {
        window.location = "/Parent-Settings"
    }

    return (
        <div className="font-fredoka tracking-widest">
            <Header />
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg mb-[24px] w-[300px]">Parent Settings</h1>
                <form className="flex flex-col" onSubmit={updateSettings}>
                    {userDocs ? (
                        <>
                            <p>Child's Name: {userDocs.childName}</p>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                    <Input type="text" id="childName" label="Change Child Name" value={childName} onChange={(e) => setPin(e.target.value)} />
                    {userDocs ? (
                        <>
                            <p>Current Email: {userDocs.email}</p>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                    <Input type="email" id="email" label="Change Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {userDocs ? (
                        <>
                            <p>Current Password: {userDocs.password}</p>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                    <Input type="password" id="password" label="Change Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {userDocs ? (
                        <>
                            <p>Current Pin: {userDocs.pin}</p>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                    <Input type="number" id="pin" label="Pin" value={stars} onChange={(e) => setStars(e.target.value)} />
                    {userDocs ? (
                        <>
                            <p>Current Stars: {userDocs.stars}</p>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                    <Input type="number" id="stars" label="Change # of Stars" value={pin} onChange={(e) => setPin(e.target.value)} />
                    
                    {/* Books Already Completed */}
                    {userDocs ? (
                        <>
                            <p className="text-lg">Books Completed</p>
                            <p>Book Title: {userDocs.booksRead.title}</p>
                            <p>Time Taken: {userDocs.booksRead.time} seconds</p>
                            <p>Score Recieved: {userDocs.booksRead.score} points</p>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}

                    <input type="submit" value="Save Changes" onClick={handleSubmit} className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] mt-[20px] hover:bg-[#6eb98c] transition-all duration-200 text-[18px]" />
                </form>
            </div>
        </div>
    )
}

export default ParentSettings;