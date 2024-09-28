import book_1 from '../book/book-1.jpeg';
import BookCard from '../components/BookCard';

const books = [
    {image: book_1, title: "The Very Hungry Caterpillar"},
    {image: book_1, title: "The Caterpillar"},
    {image: book_1, title: "The Caterpillar"},
    {image: book_1, title: "The Caterpillar"},
    {image: book_1, title: "The Hungry Caterpillar"},
]

function Home() {
    return (
        <div>
            <h1>My Books</h1>
            {books.map((book, idx) => 
                <BookCard image={book.image} title={book.title} />
            )}
        </div>
    )
}

export default Home;
