import { Link } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AuthDetails from "../components/AuthDetails";
import { useState } from "react";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            console.log(userCredential);
            window.location = "/Books";
        }).catch((error) => {
            console.log(error);
            alert("Incorrect Email or Password");
        })


    

    }
    const handleLogIn = () => {
        window.location = "/Books";
    }
    return (
        <>
            <Header />
            <div className="bg-white max-w-[36%] min-w-[400px] mt-[80px] justify-center rounded-[50px] p-[30px] m-auto font-fredoka drop-shadow-lg tracking-widest">
                <h1 className="text-[34px] mb-[34px] text-[#5087D0]  font-bold text-center drop-shadow-lg">Login</h1>
                <form className="flex flex-col" onSubmit={signIn}>
                    <Input type="email" id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" value="Log in" className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] mt-[20px] hover:bg-[#6eb98c] transition-all duration-200 text-[18px]" />
                </form>
                <div className="flex justify-center">
                    <p className="mr-[6px]">Don't have an account?</p>
                    <Link to="../Register" className="text-yellow-500 hover:opacity-70 transition-all duration-200">Register</Link>
                </div>
                <AuthDetails />
            </div>
        </>
    )
}

export default Login;