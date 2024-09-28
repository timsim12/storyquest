import Input from "../components/Input";

function Login() {
    return (
        <>
            <p>Login</p>
            <form>
                <Input type="email" id="email" label="E-mail" />
                <Input type="password" id="password" label="Password" />
                <input type="submit" />
            </form>
        </>
    )
}

export default Login;