import App from 'next/app';
import '../styles/_variables.scss';
import '../styles/app.scss';
import React, { useEffect, useState } from 'react';
import Context from '../components/Context/Context.js';

const MyApp = ({ Component, pageProps, corona }) => {
  const [app, setApp] = useState({
    corona,
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
        corona,
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

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const req = await fetch(`https://api.covid19api.com/summary`);
  const corona = await req.json();

  return { ...appProps, corona };
};

export default MyApp;
