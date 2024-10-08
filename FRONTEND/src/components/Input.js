
function Input({ label, id, type, value, onChange }) {
    return (
        <>  
            <label for={id} className="ml-[12px] mb-[4px]">{label}</label>
            <input type={type} id={id}className="mb-[16px] bg-yellow-400 rounded-[24px] outline-0 border-[4px] border-yellow-500 p-[24px] text-[18px] py-[14px] w-[80%]items-center" value={value}
            onChange={onChange}></input>
        </>
    )
}

export default Input;