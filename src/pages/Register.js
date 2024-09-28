import Input from "../components/Input";

function Register() {
    return (
        <>
            <p>Register</p>
            <form>
                <Input type="email" id="email" label="E-mail" />
                <Input type="password" id="password" label="Password" />
                <Input type="number" id="pin" label="Pin" />
                <input type="submit" />
            </form>
        </>
    )
}

export default Register;