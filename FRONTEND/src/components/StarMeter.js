import StarImage from "./StarImage";

function StarMeter({collected, total}) {
    const goalColor = () => {
        if (collected >= total) {
            return "text-green-600";
        }
        return "text-red-700";
    }

    return (
        <div className="flex items-center w-[136px]">
            <div className="flex items-center">
                <p className={goalColor()}>
                <p className="font-bold">{collected}</p>
                </p>
                <StarImage />
            </div>
            <p className="text-[30px]">&nbsp;/&nbsp;</p>
            <div className="flex items-center">
                <p className={goalColor()}>
                <p className="font-bold">{total}</p>
                </p>
                <StarImage />
            </div>
        </div>
    )
}

export default StarMeter;