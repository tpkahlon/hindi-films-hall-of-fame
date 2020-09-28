import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-162341061-20');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
