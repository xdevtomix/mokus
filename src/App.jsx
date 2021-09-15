import React, { useState } from 'react';

import ServiceWorkerInstallerUpdater from './components/ServiceWorkerInstallerUpdater';
import Home from './components/Home';

import translations from './assets/translations.json';

export default function App() {
  const [language, setLanguage] = useState('hu');

  return (
    <div className="w-full h-full">
      <ServiceWorkerInstallerUpdater />
      <Home language={language} setLanguage={setLanguage} translations={translations} />
    </div>
  )
}

