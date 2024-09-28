import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { books } from "./data";
import BookView from "./pages/BookView";


function App() {
    const removeSpaces=(text)=> {
        let noSpace = text.replace(/\s+/g, '-');
        return noSpace
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="Login" element={<Login />}></Route>
                    <Route path="Register" element={<Register />}></Route>
                    <Route path="Books" element={<Home />}></Route>
                    {books.map((book, idx) => 
                        <Route path={removeSpaces(book.title)} element={<BookView title={book.title} text={book.content} />}></Route>
                    )}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
