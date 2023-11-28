import React, { useState } from 'react';
import Navbar from './components.js/Navbar';
import Home from './pages/Home';
import Drone from './pages/Drone';
import Find from './pages/Find';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'drone':
        return <Drone />;
      case 'find':
        return <Find />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center'>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
