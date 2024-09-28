import { Link } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";

function Login() {
    return (
        <>
            <Header />
            <div className="bg-white max-w-[36%] min-w-[400px] justify-center text-center rounded-[50px] p-[30px] m-auto font-fredoka">
                <h1 className="text-[30px] mb-[34px] text-[#5087D0]  font-bold">Login</h1>
                <form className="flex flex-col items-center">
                    <Input type="email" id="email" label="Email" />
                    <Input type="password" id="password" label="Password" />
                    <input type="submit" className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] hover:opacity-70 transition-all duration-200" />
                </form>
                <div className="flex justify-center">
                    <p className="mr-[6px]">Don't have an account?</p>
                    <Link to="../Register" className="text-yellow-500 hover:opacity-50 transition-all duration-200">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Login;