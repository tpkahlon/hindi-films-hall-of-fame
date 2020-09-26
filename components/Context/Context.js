import { createContext } from 'react';

const LabelContext = createContext({
  darkMode: false,
  handleDarkMode: () => {},
});

export default LabelContext;
