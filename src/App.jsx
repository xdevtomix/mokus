import React, { useState } from 'react';

import ServiceWorkerInstallerUpdater from './components/ServiceWorkerInstallerUpdater';
import Home from './components/Home';
import Menu from './components/Menu';
import ImageViewer from './components/ImageViewer';

import translations from './assets/translations.json';

export default function App() {
  const [language, setLanguage] = useState('hu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div data-component="app" className="w-full h-full">
      <ServiceWorkerInstallerUpdater />
      <Home translations={translations} language={language} setLanguage={setLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu translations={translations} language={language} setLanguage={setLanguage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setSelectedDish={setSelectedDish} />
      <ImageViewer language={language} selectedDish={selectedDish} setSelectedDish={setSelectedDish} />
    </div>
  )
}

