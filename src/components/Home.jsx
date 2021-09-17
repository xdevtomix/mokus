import React, { useRef, useEffect } from "react";

import ActionButton from "./ActionButton";

export default function Home({ translations, language, setLanguage, setIsMenuOpen }) {
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

            <ActionButton cssClasses="fixed top-2 left-2 no-bh" text={translations.menuOpener[language]} action={() => setIsMenuOpen(true)} />

            <div className="fixed top-2 right-2 flex flex-col items-end">
                <a className="bg-black text-white text-lg leading-5 tracking-widest p-3 rounded no-underline mb-2" href="https://www.bakonyiapartmanhaz.hu">Bakonyi Apartmanház</a>
                <div className="space-x-2">
                    <ActionButton cssClasses="no-bh" text="HU" action={() => setLanguage('hu')} />
                    <ActionButton cssClasses="no-bh" text="EN" action={() => setLanguage('en')} />
                </div>
            </div>

            <div className="fixed bottom-2 left-2 bg-black text-white text-base leading-4 tracking-widest p-3 rounded">
                <div>
                    {translations.openFor[language]}
                </div>
                <br />
                <hr />
                <br />
                <div>
                    {translations.openWhen[language]}
                </div>
                <br />
                <hr />
                <br />
                <div>
                    8413, Eplény Veszprémi utca 41
                </div>
                <br />
                <hr />
                <br />
                <div>
                    Tel: 06 88 453 122 | 06 70 398 1595
                </div>
            </div>
        </div>
    );
}