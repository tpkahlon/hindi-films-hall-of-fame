import { createContext } from 'react';

const LabelContext = createContext({
  app: {
    data: null,
    darkMode: null,
    viewMode: null,
    maleMode: null,
    femaleMode: null,
  },
  handleDarkMode: () => {},
  handleViewMode: () => {},
  handleMaleMode: () => {},
  handleFemaleMode: () => {},
});

export default LabelContext;
