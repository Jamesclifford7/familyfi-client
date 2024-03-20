import './App.css';
import React from 'react';
import AppRoutes from './components/Routes';
import UserProvider from './components/UserProvider';
import MarketplaceProvider from './components/MarketplaceProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MarketplaceProvider>
          <AppRoutes />
        </MarketplaceProvider>
      </UserProvider>
    </div>
  );
}

export default App;
