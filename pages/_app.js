import '../styles/_variables.scss';
import '../styles/app.scss';
import React, { useEffect, useState } from 'react';
import Context from '../components/Context/Context.js';

const MyApp = ({ Component, pageProps }) => {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [maleMode, setMaleMode] = useState(false);
  const [femaleMode, setFemaleMode] = useState(false);
  const handleDarkMode = () => setDarkMode(!darkMode);
  const handleViewMode = () => setViewMode(!viewMode);
  const handleMaleMode = () => setMaleMode(!maleMode);
  const handleFemaleMode = () => setFemaleMode(!femaleMode);
  useEffect(() => {
    (async () => {
      const res = await fetch('/data.json');
      const json = await res.json();
      return json;
    })()
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
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
        data,
        setData,
        darkMode,
        viewMode,
        maleMode,
        femaleMode,
        handleDarkMode,
        handleViewMode,
        handleMaleMode,
        handleFemaleMode,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
};

export default MyApp;
