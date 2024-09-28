import Header from "../components/Header";

function BookView({title, author, cover, content}) {
    const selectedText = () => {
        let selection = window.getSelection().toString();
        if (selection != "") {
            console.log(selection);
        }
    }
    
    return (
        <div className="font-fredoka tracking-widest">
            <Header />
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <div className="capitalize">
                    <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">{title}</h1>
                    <h1 className="mb-[24px]">{`by: ${author}`}</h1>
                </div>
                <img src={`/covers/${cover}`} alt={title} className="rounded-[20px] w-[90%] mx-auto mb-[12px]"/>
                <body onMouseUp={selectedText}>{content}</body>
            </div>
        </div>
    )
}

export default BookView;