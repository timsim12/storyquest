import BookCard from '../components/BookCard';
import Header from "../components/Header";
import { booksArr } from '../data';
import './../book.css'

const books = booksArr;

function Home() {
    return (
        <>
            <Header />
            <div className="mt-[80px] justify-center rounded-[50px] p-[30px] m-auto font-fredoka">
                <h1 className="text-[34px] mb-[34px] font-bold text-center text-yellow-500 drop-shadow-lg">My Books</h1>
                <div className="container">
                    {books.map((book, idx) => 
                        <BookCard image={`/covers/${book.cover}`} title={book.title} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;
