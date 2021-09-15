import React from 'react';

import ServiceWorkerInstallerUpdater from './components/ServiceWorkerInstallerUpdater';
import Home from './components/Home';

export default function App() {
  return (
    <div className="w-full h-full">
      <ServiceWorkerInstallerUpdater />
      <Home />
    </div>
  )
}

