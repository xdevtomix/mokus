import React, { useEffect, useRef } from "react";

import MenuItem from "./MenuItem";

export default function Menu({ translations, language, isMenuOpen, setIsMenuOpen }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const swipeData = {
            startTime: 0,
            endTime: 0,
            startY: 0,
            endY: 0,
        };

        const onTouchStart = (e) => {
            swipeData.startTime = new Date().getTime();
            swipeData.startY = e.touches[0].clientY;
        };

        const onTouchEnd = (e) => {
            swipeData.endTime = new Date().getTime();
            swipeData.endY = e.changedTouches[0].clientY;

            const yDiff = swipeData.endY - swipeData.startY;
            const timeDiff = swipeData.endTime - swipeData.startTime;

            if (yDiff < -150 && timeDiff < 300) {
                setIsMenuOpen(true);
            }

            if (yDiff > 150 && timeDiff < 300 && containerRef.current.scrollTop === 0) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('touchstart', onTouchStart);
        document.addEventListener('touchend', onTouchEnd);

        return () => {
            document.removeEventListener('touchstart', onTouchStart);
            document.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

    return (
        <div ref={containerRef} className={`
            fixed inset-0 z-10 overflow-y-scroll no-scrollbar
            transition duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
            transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}
        `}>
            <div>
                <div className="bg-black">
                    <MenuItem>
                        <h1 className="text-white text-xl leading-6 tracking-wide">{translations.dishes.soups[language]}</h1>
                        <button className="text-white text-xl leading-6 cursor-pointer outline-none select-none mr-4" onClick={() => setIsMenuOpen(false)}>X</button>
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