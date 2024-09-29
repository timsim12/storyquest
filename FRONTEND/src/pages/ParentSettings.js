import Header from "../components/Header";
import Input from "../components/Input";
import { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";

function ParentSettings() {
    const db = getFirestore();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');

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
                <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg mb-[24px]">Parent Settings</h1>
                <form className="flex flex-col" onSubmit={updateSettings}>
                    <Input type="username" id="username" label="Username" value={pin} onChange={(e) => setPin(e.target.value)} />
                    <Input type="email" id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input type="number" id="pin" label="Pin" value={pin} onChange={(e) => setPin(e.target.value)} />
                    <input type="submit" value="Save Changes" onClick={handleSubmit} className="p-[14px] hover:cursor-pointer rounded-[20px] bg-[#9DEEBD] mb-[30px] mt-[20px] hover:bg-[#6eb98c] transition-all duration-200 text-[18px]" />
                </form>
            </div>
        </div>
    )
}

export default ParentSettings;