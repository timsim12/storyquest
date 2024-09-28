import book_1 from '../book/book-1.jpeg';
import BookCard from '../components/BookCard';
import Header from "../components/Header";

const books = [
    {image: book_1, title: "The Very Hungry Caterpillar"},
    {image: book_1, title: "The Caterpillar"},
    {image: book_1, title: "The Caterpillar"},
    {image: book_1, title: "The Caterpillar"},
    {image: book_1, title: "The Hungry Caterpillar"},
]

function Home() {
    return (
        <>
            <Header />
            <div className="mt-[80px] justify-center rounded-[50px] p-[30px] m-auto font-fredoka">
                <h1 className="text-[34px] mb-[34px] font-bold text-center text-yellow-500 drop-shadow-lg">My Books</h1>
                <div className="container">
                    {books.map((book, idx) => 
                        <BookCard image={book.image} title={book.title} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;
