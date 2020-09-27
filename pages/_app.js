import '../styles/_variables.scss';
import '../styles/app.scss';
import React, { useEffect, useState } from 'react';
import Context from '../components/Context/Context.js';

const MyApp = ({ Component, pageProps }) => {
  const [app, setApp] = useState({
    data: null,
    darkMode: null,
    viewMode: null,
    maleMode: null,
    femaleMode: null,
  });
  const handleDarkMode = () => setApp({ ...app, darkMode: !app.darkMode });
  const handleViewMode = () => setApp({ ...app, viewMode: !app.viewMode });
  const handleMaleMode = () => setApp({ ...app, maleMode: !app.maleMode });
  const handleFemaleMode = () =>
    setApp({ ...app, femaleMode: !app.femaleMode });
  const { darkMode } = app;
  useEffect(() => {
    (async () => {
      const res = await fetch('/data.json');
      const json = await res.json();
      return json;
    })()
      .then((data) => setApp({ ...app, data }))
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
        app,
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
