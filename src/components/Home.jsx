import React, { useRef, useEffect } from "react";

export default function Home() {
    const imgRef = useRef(null);

    useEffect(() => {
        imgRef.current.animate(
            [
                { offset: 0.0, transform: 'scale(1)' },
                { offset: 0.5, transform: 'scale(2)' },
                { offset: 1.0, transform: 'scale(1)' },
            ],
            {
                delay: 500,
                duration: 2000,
            }
        );
        return () => { };
    }, []);

    return (
        <div className="w-full h-full">
            <img
                ref={imgRef}
                srcSet="
                    ./images/mokusbufe_bw_320.jpg 320w,
                    ./images/mokusbufe_bw_640.jpg 640w,
                    ./images/mokusbufe_bw_1280.jpg 1280w,
                    ./images/mokusbufe_bw_1920.jpg 1920w,
                    ./images/mokusbufe_bw_2560.jpg 2560w
                "
                className="w-full h-full object-cover"
                alt="Mókusbüfé" />
        </div>
    );
}