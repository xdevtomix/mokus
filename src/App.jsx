import React, { useState } from 'react';

import ServiceWorkerInstallerUpdater from './components/ServiceWorkerInstallerUpdater';
import Home from './components/Home';

export default function App() {
  const [language, setLanguage] = useState('hu');

  return (
    <div className="w-full h-full">
      <ServiceWorkerInstallerUpdater />
      <Home language={language} setLanguage={setLanguage}/>
    </div>
  )
}

