import { Link } from "react-router-dom";
import Header from "../components/Header";

function BookView({title, author, cover, content}) {
    const selectedText = () => {
        let selection = window.getSelection().toString();
        if (selection != "") {
            console.log(selection);
        }
    }

    const addLineBreak = (string) =>
        string.split('\n').map((subStr) => {
          return (
            <>
              {subStr}
              <br />
            </>
          );
        });
    
    return (
        <>
            <Header />
            <div className="bg-white mt-[20px] mx-[20%] rounded-[20px] p-[20px] font-fredoka tracking-widest">
                <Link to="/Books" className="bg-red-400 p-[14px] rounded-[8px] mt-[14px] hover:bg-red-300 transition-all duration-200">Back</Link>
                <div className="capitalize ml-[20%]">
                    <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">{title}</h1>
                    <h1 className="mb-[24px]">{`by: ${author}`}</h1>
                </div>
                <img src={`/covers/${cover}`} alt={title} className="rounded-[20px] w-[60%] max-w-[400px] mx-auto mb-[24px]"/>
                <p className="text-[20px] mx-[10%]" onMouseUp={selectedText}>{addLineBreak(content)}</p>
                <h1 className="mt-[48px] mb-[24px] text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">Reading Quiz</h1>
            </div>
        </>
    )
}

export default BookView;