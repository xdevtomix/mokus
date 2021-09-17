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
            overscroll-y-none
        `}>
            <div className="overscroll-y-none">
                {translations.dishes.map((item) => {
                    return (
                        <MenuItem key={item.id} role={item.role}>
                            {item.role === 'header' && (
                                <>
                                    <h1 className="text-white text-xl leading-6 tracking-wide">{item[language]}</h1>
                                    {item.id === 'soups' && <button className="text-white text-xl leading-6 cursor-pointer outline-none select-none mr-4" onClick={() => setIsMenuOpen(false)}>X</button>}
                                </>
                            )}
                            {item.role === 'dish' && <><span>{`${item.id}. ${item[language]}`}</span><span>{item.price}</span></>}
                            {item.role === 'info' && <><span>{item[language]}</span><span></span></>}
                            {item.role === 'separator' && <><span></span><span></span></>}
                        </MenuItem>
                    );
                })}
            </div>
        </div>
    );
}