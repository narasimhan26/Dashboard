import React from 'react';
import './App.css';
import Index from './Containers/Index';

import { GlobalProvider } from './Contexts/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Index />
      </div>
    </GlobalProvider>  
  );
}

export default App;
