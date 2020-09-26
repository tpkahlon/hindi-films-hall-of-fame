import '../styles/_variables.scss';
import '../styles/app.scss';
import React, { useState } from 'react';
import Context from '../components/Context/Context.js';

const MyApp = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => setDarkMode(!darkMode);
  if (typeof document !== 'undefined') {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  return (
    <Context.Provider
      value={{
        darkMode,
        handleDarkMode,
      }}
    >
      <Component {...pageProps} darkMode={darkMode} />
    </Context.Provider>
  );
};

export default MyApp;
