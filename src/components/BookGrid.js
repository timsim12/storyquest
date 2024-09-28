import { books } from "../data";
import BookCard from "./BookCard"

function BookGrid() {
    return (
        <>
            <h1 className="text-[40px] mb-[34px] font-bold text-center text-[#5087D0] drop-shadow-lg">My Books</h1>

            <div className="grid grid-cols-fit gap-[15px]">
                {books.map((book, idx) => 
                    <BookCard image={`/covers/${book.cover}`} title={book.title} author={book.author} />
                )}
            </div>
        </>
    )
}

export default BookGrid;