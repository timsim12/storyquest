function Input({ label, id, type }) {
    return (
        <>
            <input type={type} id={label} placeholder={label} className="mb-[30px] bg-transparent outline-0 border-b-2 border-yellow-500 p-[10px] w-[80%]"></input>
        </>
    )
}

export default Input;