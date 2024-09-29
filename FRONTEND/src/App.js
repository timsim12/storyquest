import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { books } from "./data";
import BookView from "./pages/BookView";
import Openai from "./Openai";
import ParentCorner from "./pages/ParentCorner";
import ParentSettings from "./pages/ParentSettings";


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
                    <Route path="Parent-Corner" element={<ParentCorner/>}></Route>
                    <Route path="Parent-Settings" element={<ParentSettings/>}></Route>
                    {books.map((book, idx) => 
                        <Route path={`/books/${removeSpaces(book.title)}`} element={<BookView title={book.title} author={book.author} cover={book.cover} content={book.content} stars={book.stars} />}></Route>
                    )}
                    <Route path="Parent-Settings" element={<ParentSettings />}></Route>
                    <Route path="openai" element={<Openai />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
