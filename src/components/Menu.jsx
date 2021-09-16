import React from "react";

import MenuItem from "./MenuItem";

export default function Menu({ translations, language, isMenuOpen, setIsMenuOpen }) {
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={`
            fixed inset-0 z-10 overflow-y-scroll no-scrollbar
            transition duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
            transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}
        `}>
            <div>
                <div className="bg-black">
                    <MenuItem>
                        <h1 className="text-white text-lg leading-5 tracking-wide">{translations.dishes.soups[language]}</h1>
                        <button className="text-white text-lg leading-5 cursor-pointer outline-none select-none" onClick={() => closeMenu()}>X</button>
                    </MenuItem>
                </div>
                <div className="bg-white">
                    <MenuItem>
                        <span>{translations.dishes['1'][language]}</span><span>{translations.dishes['1'].price}</span>
                    </MenuItem>
                    <MenuItem>
                        <span>{translations.dishes['2'][language]}</span><span>{translations.dishes['2'].price}</span>
                    </MenuItem>
                    <MenuItem>
                        <span>{translations.dishes['3'][language]}</span><span>{translations.dishes['3'].price}</span>
                    </MenuItem>
                    <MenuItem>
                        <span>{translations.dishes['4'][language]}</span><span>{translations.dishes['4'].price}</span>
                    </MenuItem>
                </div>                
            </div>
        </div>
    );
}