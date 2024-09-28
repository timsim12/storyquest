import Header from "../components/Header";

function BookView({title, text}) {
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
                <body>
                <h1 className="text-[40px] mb-[34px] font-bold text-left text-[#5087D0] drop-shadow-lg">{title}</h1>
                    <div className="w-[50%]">
                        <body onMouseUp={selectedText}>{text}</body>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default BookView;
