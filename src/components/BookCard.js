
function BookCard({image, title, text}) {
    return (
        <>
            <div class="max-w-[40%]">
                <img src={image} alt={title} className="w-[60%]"/>
                <h3>{title}</h3>
            </div>
        </>
    )
}


export default BookCard;