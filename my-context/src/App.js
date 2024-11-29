import React from 'react';
import { AppProvider } from './AppContext';
import Counter from './components/Counter';

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <h1 className="text-4xl text-center font-extrabold">React Context with Global State</h1>
        <Counter />
      </div>
    </AppProvider>
  );
}

export default App;
