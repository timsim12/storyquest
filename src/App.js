import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Login" element={<Login />}></Route>
                    <Route path="Register" element={<Register />}></Route>
                    <Route path="Books" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
