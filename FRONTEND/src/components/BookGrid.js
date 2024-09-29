import { Link } from "react-router-dom";
import { books } from "../data";
import BookCard from "./BookCard"

function BookGrid() {
    const removeSpaces=(text)=> {
        let noSpace = text.replace(/\s+/g, '-');
        return noSpace
    }

    return (
        <>
            <h1 className="text-[40px] mb-[34px] font-bold text-left text-[#5087D0] drop-shadow-lg w-[200px]">Books</h1>

            <div className="grid grid-cols-fit gap-[15px]">
                {books.map((book, idx) => 
                    <Link to={`../books/${removeSpaces(book.title)}`}>
                        <BookCard image={`/covers/${book.cover}`} title={book.title} author={book.author} />
                    </Link>
                )}
            </div>
        </>
    )
}

export default BookGrid;