import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Beranda from './pages/Beranda';
import Join from './pages/Join';
import Edukasi from './pages/Edukasi';
import TradingView from './pages/TradingView';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('beranda');

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Beranda setCurrentPage={setCurrentPage} />;
      case 'join':
        return <Join />;
      case 'edukasi':
        return <Edukasi />;
      case 'tradingview':
        return <TradingView />;
      default:
        return <Beranda setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-forex-primary">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <div key={currentPage}>
                {renderPage()}
              </div>
            </AnimatePresence>
          </main>
        </>
      )}
    </div>
  );
}

export default App;