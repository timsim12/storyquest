import Header from "../components/Header";

function BookView({title, text}) {
    
    
    return (
        <>
            <Header />
            <h1>{title}</h1>
            <body>
                <div className="w-[50%]">
                    <body id="text">{text}</body>
                </div>
            </body>
        </>
    )
}

export default BookView;