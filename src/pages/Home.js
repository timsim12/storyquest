import book_1 from './../book/book-1.jpeg';

function Home() {
    return (
        <div>
            <h1>My Books</h1>
            <img src={book_1} width={100} height={100} alt="book 1 cover"/>
        </div>
    )
}

export default Home;