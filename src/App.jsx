import React, { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    const serviceWorkerContainer = navigator.serviceWorker;

    serviceWorkerContainer.register('sw-mokus.js')
      .then((serviceWorkerRegistration) => {
        console.log('Service worker registered.', serviceWorkerRegistration);

        serviceWorkerRegistration.addEventListener('updatefound', (event) => {
          if (serviceWorkerRegistration.active) {
            console.log('Service worker update found');
          }
        });
      });

    return () => { };
  }, []);

  return (
    <div className="bg-red-200">mokusbüfé</div>
  )
}

