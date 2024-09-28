import { Link } from "react-router-dom";
import Input from "../components/Input";
import Header from "../components/Header";

function Register() {
    return (
        <>
            <Header />
            <div className="bg-white max-w-[36%] min-w-[400px] mt-[80px] justify-center rounded-[50px] p-[30px] m-auto font-fredoka">
                <h1 className="text-[34px] mb-[34px] text-[#5087D0]  font-bold text-center">Register</h1>
                <form className="flex flex-col">
                    <Input type="email" id="email" label="Email" />
                    <Input type="password" id="password" label="Password" />
                    <Input type="number" id="pin" label="Pin" />
                    <input type="submit" value="Register" className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] mt-[20px] hover:opacity-70 transition-all duration-200" />
                </form>
                <div className="flex justify-center">
                    <p className="mr-[6px]">Already have an account?</p>
                    <Link to="../Login" className="text-yellow-500 hover:opacity-50 transition-all duration-200">Login</Link>
                </div>
            </div>
        </>
    )
}

export default Register;