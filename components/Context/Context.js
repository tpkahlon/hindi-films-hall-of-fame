import { createContext } from 'react';

const LabelContext = createContext({
  darkMode: false,
  viewMode: false,
  handleDarkMode: () => {},
  handleViewMode: () => {},
});

export default LabelContext;
