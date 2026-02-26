import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Beranda from './pages/Beranda';
import Join from './pages/Join';
import Edukasi from './pages/Edukasi';
import TradingView from './pages/TradingView';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('beranda');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerInstanceRef = useRef(null);

  const youtubeVideoId = "GqVTW50s5Y8";

  // Load YouTube Player API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerInstanceRef.current = new window.YT.Player('youtube-player', {
        height: '1',
        width: '1',
        videoId: youtubeVideoId,
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'disablekb': 1,
          'fs': 0,
          'loop': 1,
          'playlist': youtubeVideoId,
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
        }
      });
    };

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = (event) => {
    playerInstanceRef.current = event.target;
    if (isPlaying) {
      event.target.playVideo();
      event.target.setMute(isMuted);
    }
  };

  const toggleMusic = () => {
    if (!playerInstanceRef.current) return;
    
    if (isPlaying) {
      playerInstanceRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerInstanceRef.current.playVideo();
      playerInstanceRef.current.setMute(false);
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!playerInstanceRef.current) return;
    
    const newMutedState = !isMuted;
    playerInstanceRef.current.setMute(newMutedState);
    setIsMuted(newMutedState);
  };

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
          {/* YouTube Player (Hidden) */}
          <div className="hidden">
            <div id="youtube-player"></div>
          </div>

          {/* Music Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="fixed top-24 right-4 z-30 flex gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMusic}
              className="bg-forex-gold text-forex-primary px-4 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              <span>{isPlaying ? 'Pause Music' : 'Play Music'}</span>
            </motion.button>
            
            {isPlaying && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="bg-forex-gold text-forex-primary px-3 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </motion.button>
            )}
          </motion.div>

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