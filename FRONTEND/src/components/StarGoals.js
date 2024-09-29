import StarImage from "./StarImage";

function StarGoals() {
    return (
        <>
            <div className="items-center bg-white p-[20px] mx-[10%] rounded-[20px] text-[18px] mt-[20px] px-[60px]">
                <h1 className="font-semibold text-[22px] text-yellow-500">Hi, Tomy!</h1>
                <div className="flex">
                    <p>Your next reward is:&nbsp;</p>
                    <p className="font-semibold text-[#5087D0] mb-[8px]">5 pieces of candy</p>
                    <p>!</p>
                </div>
                <div className="grid grid-cols-fit text-center bg-yellow-400 rounded-[20px] p-[8px]">
                    <div className="flex items-center mx-auto">
                        <p>Total </p>
                        <StarImage />
                        <p>: 5</p>
                    </div>
                    <div className="flex items-center mx-auto">
                        <p>Current Goal:&nbsp;</p>
                        <div className="flex items-center">
                            <p className="text-red-700 font-bold">5</p>
                            <StarImage />
                        </div>
                        <p className="text-[30px]">&nbsp;/&nbsp;</p>
                        <div className="flex items-center">
                            <p className="text-green-600 font-bold">10</p>
                            <StarImage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarGoals;