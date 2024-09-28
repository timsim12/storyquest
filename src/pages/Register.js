import { Link } from "react-router-dom";
import Input from "../components/Input";
import Header from "../components/Header";

function Register() {
    return (
        <>
            <Header />
            <div>
                <p>Register</p>
                <form className="flex">
                    <Input type="email" id="email" label="E-mail" />
                    <Input type="password" id="password" label="Password" />
                    <Input type="number" id="pin" label="Pin" />
                    <input type="submit" />
                </form>
                <div className="flex">
                    <p>Already have an account?</p>
                    <Link to="../Login">Login</Link>
                </div>
            </div>
        </>
    )
}

export default Register;