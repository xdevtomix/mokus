import React, { useState } from 'react';

import ServiceWorkerInstallerUpdater from './components/ServiceWorkerInstallerUpdater';
import Router from './components/Router';
import Swiper from './components/Swiper';
import Home from './components/Home';
import Menu from './components/Menu';

import translations from './assets/translations.json';

export default function App() {
  const [language, setLanguage] = useState('hu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <ServiceWorkerInstallerUpdater />
      <Router setIsMenuOpen={setIsMenuOpen} />
      <Swiper />
      <Home translations={translations} language={language} setLanguage={setLanguage} />
      <Menu translations={translations} language={language} isMenuOpen={isMenuOpen} />
    </div>
  )
}

