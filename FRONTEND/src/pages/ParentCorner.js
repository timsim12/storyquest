import Header from "../components/Header";

function ParentCorner() {
    return (
        <div className="font-fredoka tracking-widest">
            <Header />
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg mb-[24px]">Your child's progress</h1>
                <h1>Recently read</h1>
            </div>
        </div>
    )
}

export default ParentCorner;