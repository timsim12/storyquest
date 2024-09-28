import { Link } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";

function Login() {
    return (
        <>
            <Header />
            <div>
                <p>Login</p>
                <form className="flex">
                    <Input type="email" id="email" label="E-mail" />
                    <Input type="password" id="password" label="Password" />
                    <input type="submit" />
                </form>

                <div className="flex">
                    <p>Don't have an account? </p>
                    <Link to="../Register"> Create one</Link>
                </div>
            </div>
        </>
    )
}

export default Login;