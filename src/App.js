import React from 'react';
import './App.css';
import SideNavbar from './Components/SideNavbar';
import Index from './Containers/Index';

import { GlobalProvider } from './Contexts/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="d-flex">
        <SideNavbar />
        <Index />
      </div>
    </GlobalProvider>  
  );
}

export default App;
