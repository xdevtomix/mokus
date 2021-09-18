import React, { useState, useEffect } from 'react';

export default function ServiceWorkerInstallerUpdater() {
    const [updateFound, setUpdateFound] = useState(false);

    useEffect(() => {
        const serviceWorkerContainer = navigator.serviceWorker;

        serviceWorkerContainer.register('sw-mokus.js')
            .then((serviceWorkerRegistration) => {
                console.log('Service worker registered.'/* , serviceWorkerRegistration */);

                serviceWorkerRegistration.addEventListener('updatefound', (event) => {
                    if (serviceWorkerRegistration.active) {
                        setUpdateFound(true);
                    }
                });
            });

        return () => { };
    }, []);

    return (
        <>
            {
                updateFound
                &&
                <div
                    className="fixed inset-0 z-10 bg-black text-white cursor-pointer select-none flex flex-col justify-center items-center tracking-widest"
                    onClick={() => location.reload()}
                >
                    <div>Kattintson ide a legújabb étlaphoz!</div>
                    <div>Click here for the latest menu.</div>
                </div>
            }
        </>
    );
}