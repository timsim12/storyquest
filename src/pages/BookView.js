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
                {/* <script> */}
                    {/* $( "text" ).on( "select", function() {
                        alert( "Handler for `select` called." )
                    } ); */}
                {/* </script> */}
            </body>
        </>
    )
}

export default BookView;