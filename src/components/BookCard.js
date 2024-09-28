
function BookCard({image, title}) {
    return (
        <div>
            <img src={image} width={100} height={100} alt="book 1 cover"/>
            <h3>{title}</h3>
        </div>
    )
}


export default BookCard;