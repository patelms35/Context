import React, { createContext, useState, useContext } from 'react';

// Create a Context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <AppContext.Provider value={{ count, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for easier access
export const useAppContext = () => useContext(AppContext);
