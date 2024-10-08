import { useState } from "react";
import StarImage from "./StarImage";

function BookCard({image, title, author, stars}) {
    return (
        <>
            <div className="capitalize transition-all duration-200 hover:scale-[1.05] hover:bg-yellow-400 bg-blue-100 rounded-[20px] text-center p-[20px]">
                <img src={image} alt={title} className="rounded-[20px] w-fit mx-auto mb-[12px] h-[220px]"/>
                <div className="h-[100px]">
                    <h3 className="text-[20px] font-bold text-red-600">{title}</h3>
                    <h1>{`by: ${author}`}</h1>
                    <div className="flex justify-center">
                        {Array.from({ length: stars}, (_, index) => (
                            <StarImage className="w-[8px]" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default BookCard;
