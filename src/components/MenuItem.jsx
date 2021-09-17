import React from "react";

export default function MenuItem({role, children}) {
    return (
        <div className={`
            flex justify-between items-center
            p-2 text-[13px] leading-[13px] text-black
            ${role === 'header' ? 'bg-black' : 'bg-white'}
        `}>
            {children}
        </div>
    );
}