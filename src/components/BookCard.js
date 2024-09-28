
function BookCard({image, title}) {
    return (
        <>
            <div class="object-fit:cover">
                <img src={image} alt={title} class="w-20"/>
                <h3>{title}</h3>
            </div>
        </>
    )
}


export default BookCard; 