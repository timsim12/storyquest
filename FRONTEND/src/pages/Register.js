import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";
import Input from "../components/Input";
//Import Firestore stuff
import { getFirestore, doc, setDoc } from "firebase/firestore";


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');

    const db = getFirestore();


    const signUp = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
        //Storing the email, password, and pin into firstore with ID as the email
        setDoc(doc(db, "UserInfo", email), {
            email: email,
            password: password,
            pin: pin
        });
        // signOut(auth);
        // Navigate("/login");
    }

    const handleSubmit = () => {
        window.location = "/Login"
    }

    

    return (
        <>
            <Header />
            <div className="bg-white max-w-[36%] min-w-[400px] mt-[80px] justify-center rounded-[50px] p-[30px] m-auto font-fredoka drop-shadow-lg tracking-widest">
                <h1 className="text-[34px] mb-[34px] text-[#5087D0]  font-bold text-center">Register</h1>
                <form className="flex flex-col" onSubmit={signUp}>
                    <Input type="email" id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input type="number" id="pin" label="Pin" value={pin} onChange={(e) => setPin(e.target.value)} />
                    <input type="submit" value="Register" onClick={handleSubmit} className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] mt-[20px] hover:bg-[#6eb98c] transition-all duration-200 text-[18px]" />
                </form>
                <div className="flex justify-center">
                    <p className="mr-[6px]">Already have an account?</p>
                    <Link to="../Login" className="text-yellow-500 hover:opacity-70 transition-all duration-200">Log in</Link>
                </div>
                <AuthDetails />
            </div>
        </>
    )
}

export default Register;