import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', page: 'beranda' },
    { name: 'Join', page: 'join' },
    { name: 'Edukasi Trading', page: 'edukasi' },
    { name: 'TradingView', page: 'tradingview' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-forex-primary/95 backdrop-blur-sm border-b border-forex-accent"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img 
              src="/logos/Logo.JPG" 
              alt="SukaForex Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold gradient-text">SukaForex</span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(item.page)}
                className={`font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-forex-gold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.page}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentPage(item.page);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left font-medium transition-colors ${
                      currentPage === item.page
                        ? 'text-forex-gold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;