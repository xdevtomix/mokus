import React, { useEffect } from "react";

export default function Swiper() {
    useEffect(() => {
        const swipeData = {
            startTime : 0,
            endTime : 0,
            startY : 0,
            endY : 0,
        };

        const onPointerDown = (e) => {
            e.preventDefault();
            swipeData.startTime = new Date().getTime();
            swipeData.startY = e.clientY;
        };
        const onPointerMove = (e) => {
            e.preventDefault();
         };
        const onPointerUp = (e) => {
            e.preventDefault();
            swipeData.endTime = new Date().getTime();
            swipeData.endY = e.clientY;

            const yDiff = swipeData.endY - swipeData.startY;
            const timeDiff = swipeData.endTime - swipeData.startTime;

            if (yDiff < -50 && timeDiff < 1000 && location.hash !== '#menu--open') {
                location.hash = '#menu-open';
            }
         };

        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);

        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
        };
    }, []);

    return (
        <div data-component="swiper"></div>
    );
}