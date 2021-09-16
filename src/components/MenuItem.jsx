import React from "react";

export default function MenuItem({children}) {
    return (
        <div className="flex justify-between items-center p-2 text-[13px] leading-[13px] text-black">
            {children}
        </div>
    );
}