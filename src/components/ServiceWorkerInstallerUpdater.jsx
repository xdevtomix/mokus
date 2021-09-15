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
            {updateFound && <div>Frissítsen a legújabb étlaphoz!</div>}
        </>
    );
}