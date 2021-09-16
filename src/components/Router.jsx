import React, { useEffect } from "react";

export default function Router({ setIsMenuOpen }) {
    const onHashChange = () => {
        if (location.hash === '#menu-open') {
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        onHashChange();
        return () => {};
    }, []);

    useEffect(() => {
        window.addEventListener('hashchange', onHashChange);
        return () => {
            window.removeEventListener('hashchange', onHashChange);
        };
    }, []);

    return (
        <div data-component="router"></div>
    );
}