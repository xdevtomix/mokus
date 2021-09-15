import React, { useRef, useEffect } from "react";

export default function Home({ language, setLanguage, translations }) {
    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.animate(
            [
                { offset: 0.0, opacity: '0' },
                { offset: 1.0, opacity: '1' },
            ],
            {
                duration: 1000,
            }
        );
        return () => { };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full">
            <img
                srcSet="
                    ./images/mokusbufe_bw_320.jpg 320w,
                    ./images/mokusbufe_bw_640.jpg 640w,
                    ./images/mokusbufe_bw_1280.jpg 1280w,
                    ./images/mokusbufe_bw_1920.jpg 1920w,
                    ./images/mokusbufe_bw_2560.jpg 2560w
                "
                className="w-full h-full object-cover"
                alt="Mókusbüfé" />

            <button className="fixed top-[1vh] left-[1vw] bg-black text-white text-lg leading-5 tracking-widest p-3 rounded cursor-pointer border-0 outline-none">
                {translations.menuOpener[language]}
            </button>

            <div className="fixed top-[1vh] right-[1vw] flex flex-col items-end">
                <a className="bg-black text-white text-lg leading-5 tracking-widest p-3 rounded no-underline mb-2" href="https://www.bakonyiapartmanhaz.hu">Bakonyi Apartmanház</a>
                <div className="space-x-2">
                    <button className="bg-black text-white text-lg leading-5 tracking-widest p-3 rounded cursor-pointer border-0 outline-none" onClick={() => setLanguage('hu')}>HU</button>
                    <button className="bg-black text-white text-lg leading-5 tracking-widest p-3 rounded cursor-pointer border-0 outline-none" onClick={() => setLanguage('en')}>EN</button>
                </div>
            </div>
            {language}
        </div>
    );
}