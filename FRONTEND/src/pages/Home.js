import BookGrid from '../components/BookGrid';
import Header from "../components/Header";
import StarGoals from '../components/StarGoals';
import './../book.css'

function Home() {
    return (
        <div className="font-fredoka tracking-widest">
            <Header /> 
            <StarGoals />
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <BookGrid />
            </div>
        </div>
    )
}

export default Home;
