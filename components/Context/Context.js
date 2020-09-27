import { createContext } from 'react';

const LabelContext = createContext({
  corona: {
    Countries: null,
    Date: null,
    Global: null,
    Message: null,
  },
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
