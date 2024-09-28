import BookGrid from '../components/BookGrid';
import Header from "../components/Header";
import './../book.css'

function Home() {
    return (
        <div className="font-fredoka tracking-widest">
            <Header /> 
            <div className="bg-white mt-[50px] mx-[10%] rounded-[14px] p-[40px]">
                <BookGrid />
            </div>
        </div>
    )
}

export default Home;
