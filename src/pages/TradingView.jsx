import { motion } from 'framer-motion';

const TradingView = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-20 pb-12 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.section
          variants={itemVariants}
          className="text-center mb-8 py-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            TradingView Chart
          </h1>
          <p className="text-gray-300 text-lg">
            Analisa pasar forex dengan chart real-time dari TradingView
          </p>
        </motion.section>

        {/* TradingView Widget */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-4 shadow-2xl"
        >
          <div className="w-full" style={{ height: '600px' }}>
            <iframe
              src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=EURUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=&utm_medium=widget&utm_campaign=chart&utm_term=EURUSD"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px',
              }}
              allowTransparency="true"
              scrolling="no"
              allowFullScreen="true"
            ></iframe>
          </div>
        </motion.section>

        {/* Info Section */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mt-8 shadow-2xl"
        >
          <h2 className="section-title mb-4">Tentang TradingView</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              TradingView adalah platform charting dan analisa teknikal yang paling populer di dunia untuk trader forex, saham, dan cryptocurrency. Platform ini menyediakan berbagai alat analisa yang lengkap dan chart real-time.
            </p>
            
            <h3 className="text-xl font-bold text-forex-gold mt-6 mb-4">
              Fitur Utama TradingView:
            </h3>
            
            <div className="space-y-3">
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Chart Real-Time</h4>
                <p>Data harga yang akurat dan update secara real-time untuk berbagai instrumen trading.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Indikator Teknikal</h4>
                <p>Ratusan indikator teknikal yang bisa digunakan untuk analisa pasar.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Drawing Tools</h4>
                <p>Alat gambar untuk membuat trendline, support & resistance, dan pola chart.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Community</h4>
                <p>Komunitas trader yang berbagi ide dan analisa trading.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default TradingView;