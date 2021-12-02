import { useEffect, useRef } from "react";
import { XCircleIcon, PhotographIcon } from '@heroicons/react/outline';

import MenuItem from "./MenuItem";
import ActionButton from "./ActionButton";

export default function Menu({ translations, language, setLanguage, isMenuOpen, setIsMenuOpen, setSelectedDish }) {
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
        <div data-component="menu" ref={containerRef} className={`
            fixed inset-0 z-10 overflow-y-scroll no-scrollbar
            transition duration-300 transform-gpu ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
        `}>
            <div className="mx-auto ipad-h:w-3/5 win:w-2/5">
                {translations.dishes.map((item) => {
                    return (
                        <MenuItem key={item.id} role={item.role}>
                            {item.role === 'header' && (
                                <>
                                    <h1 className="text-white text-xl leading-6 tracking-wide">{item[language]}</h1>
                                    {item.id === 'breakfast' && (
                                        <div className="flex justify-between items-center">
                                            <ActionButton cssClasses={`pr-1 ${language === 'hu' ? 'text-pink-300' : ''}`} text="HU" action={() => setLanguage('hu')} />
                                            <ActionButton cssClasses={`pl-1 ${language === 'en' ? 'text-pink-300' : ''}`} text="EN" action={() => setLanguage('en')} />
                                            <XCircleIcon className="h-10 w-10 text-gray-300 cursor-pointer no-bh" onClick={() => setIsMenuOpen(false)} />
                                        </div>
                                    )}
                                </>
                            )}
                            {item.role === 'dish' && (
                                <>
                                    <div className="flex items-center">
                                        <span>{`${item.id}. ${item[language]}`}</span>
                                        {item.url && <img className="w-1 h-6 object-cover invisible no-bh" src={item.url} alt={item[language]} loading="lazy" />}
                                        {item.url && <PhotographIcon className="w-6 h-6 text-gray-600 cursor-pointer no-bh" onClick={() => setSelectedDish(item)} />}
                                    </div>
                                    <span>{item.price}</span>
                                </>
                            )}
                            {item.role === 'info' && <><span>{item[language]}</span><span></span></>}
                            {item.role === 'separator' && <><span></span><span></span></>}
                            {item.role === 'info-centered' && <div className="flex justify-center items-center w-full">{item[language]}</div>}
                        </MenuItem>
                    );
                })}
            </div>
        </div>
    );
}