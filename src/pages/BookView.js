import Header from "../components/Header";

function BookView({title, text}) {
    const selectedText = () => {
        let selection = window.getSelection().toString();
        if (selection != "") {
            console.log(selection);
        }
    }
    
    return (
        <>
            <Header />
            <h1>{title}</h1>
            <body>
                <div className="w-[50%]">
                    <body onMouseUp={selectedText}>{text}</body>
                </div>
            </body>
        </>
    )
}

export default BookView;
