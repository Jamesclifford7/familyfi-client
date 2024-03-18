import './App.css';
import React from 'react';
import AppRoutes from './components/Routes';
import UserProvider from './components/UserProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
