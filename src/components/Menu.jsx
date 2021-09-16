import React from "react";

export default function Menu({isMenuOpen, setIsMenuOpen}) {
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={`
            fixed inset-0 z-10 bg-black text-white
            transition duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
            transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}
        `}>
            <span onClick={() => closeMenu()}>close</span>
        </div>
    );
}