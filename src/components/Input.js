function Input({ label, id, type }) {
    return (
        <>
            <label for={id}>{label}</label>
            <input type={type} id={label}></input>
        </>
    )
}

export default Input;