import React, { useState } from 'react';

import ServiceWorkerInstallerUpdater from './components/ServiceWorkerInstallerUpdater';
import Home from './components/Home';
import Menu from './components/Menu';

import translations from './assets/translations.json';

export default function App() {
  const [language, setLanguage] = useState('hu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full overscroll-y-none">
      <ServiceWorkerInstallerUpdater />
      <Home translations={translations} language={language} setLanguage={setLanguage} setIsMenuOpen={setIsMenuOpen} />
      <Menu translations={translations} language={language} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  )
}

