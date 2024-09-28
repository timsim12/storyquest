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
    const [pin, setPin] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <>
            <Header />
            <div className="bg-white max-w-[36%] min-w-[400px] mt-[80px] justify-center rounded-[50px] p-[30px] m-auto font-fredoka">
                <h1 className="text-[34px] mb-[34px] text-[#5087D0]  font-bold text-center">Login</h1>
                <form className="flex flex-col">
                    <Input type="email" id="email" label="Email" />
                    <Input type="password" id="password" label="Password" />
                    <input type="submit" value="Log in" className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] mt-[20px] hover:opacity-70 transition-all duration-200" />
                </form>
                <div className="flex justify-center">
                    <p className="mr-[6px]">Don't have an account?</p>
                    <Link to="../Register" className="text-yellow-500 hover:opacity-50 transition-all duration-200">Register</Link>
                </div>
                <AuthDetails />
            </div>
        </>
    )
}

export default Login;