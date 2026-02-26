import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Beranda = ({ setCurrentPage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);
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
      <div className="container mx-auto max-w-6xl">
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
            <span className="hidden sm:inline">{isPlaying ? 'Pause Music' : 'Nyalakan Music'}</span>
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

        {/* Welcome Section */}
        <motion.section
          variants={itemVariants}
          className="text-center mb-16 py-12"
        >
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
          >
            Welcome Website SukaForex
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg"
          >
            Platform IB Trading Forex Terpercaya di Indonesia
          </motion.p>
        </motion.section>

        {/* Apa itu Trading Forex */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Apa itu Trading Forex</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              Trading forex adalah aktivitas jual beli pasangan mata uang asing (seperti EUR/USD, GBP/USD) di pasar keuangan global yang bertujuan mendapatkan keuntungan dari fluktuasi selisih harga jual dan beli. Pasar ini beroperasi 24 jam sehari, 5 hari seminggu, dan merupakan pasar paling likuid dengan volume transaksi harian mencapai lebih dari $5 triliun.
            </p>
            
            <h3 className="text-xl font-bold text-forex-gold mt-6 mb-4">
              Berikut detail penting mengenai trading forex:
            </h3>
            
            <div className="space-y-3">
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Pasangan Mata Uang (Pairs)</h4>
                <p>Mata uang selalu diperdagangkan dalam pasangan. Jika Anda membeli EUR/USD, artinya Anda membeli Euro dan menjual Dolar AS secara bersamaan.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Cara Mendapat Untung</h4>
                <p>Keuntungan diperoleh dengan memprediksi arah pergerakan mata uang.</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Buy (Long)</strong>: Beli di harga rendah, jual di harga tinggi.</li>
                  <li><strong>Sell (Short)</strong>: Jual di harga tinggi, beli kembali di harga rendah.</li>
                </ul>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Pasar 24 Jam</h4>
                <p>Pasar forex beroperasi non-stop dari Senin hingga Jumat, mengikuti sesi perdagangan dunia (Sydney, Tokyo, London, New York).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-red mb-2">Risiko Tinggi (High Risk)</h4>
                <p>Meskipun potensi keuntungan tinggi, trading forex memiliki risiko tinggi karena volatilitas pasar yang cepat.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Regulasi di Indonesia</h4>
                <p>Di Indonesia, trading forex legal di bawah pengawasan BAPPEBTI (Badan Pengawas Perdagangan Berjangka Komoditi).</p>
              </div>
            </div>
            
            <p className="mt-4">
              Trading forex dilakukan secara online melalui platform yang disediakan oleh broker, memungkinkan individu untuk berpartisipasi dalam pasar yang sebelumnya didominasi oleh bank dan lembaga keuangan besar.
            </p>
          </div>
        </motion.section>

        {/* Apa itu Teknikal Analisa */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Apa itu Teknikal Analisa</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              Teknikal analisis forex adalah metode memprediksi arah pergerakan harga mata uang di masa depan dengan mempelajari data historis, grafik harga, dan indikator volume. Pendekatan ini fokus pada pola, tren (trend), dan level support/resistance untuk menentukan titik entry (beli/jual) dan exit (take profit/stop loss) yang optimal, yang mana grafik dianggap mencerminkan seluruh informasi pasar.
            </p>
            
            <h3 className="text-xl font-bold text-forex-gold mt-6 mb-4">
              Komponen Utama Teknikal Analisis Forex:
            </h3>
            
            <div className="space-y-3">
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Grafik Candlestick</h4>
                <p>Alat utama untuk melihat aksi harga (price action) yang menunjukkan harga pembukaan, penutupan, tertinggi, dan terendah.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Trend (Tren)</h4>
                <p>Mengidentifikasi arah pasar: Bullish (naik), Bearish (turun), atau Sideways (datar).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Support & Resistance</h4>
                <p>Level psikologis di mana harga cenderung berhenti turun (support) atau berhenti naik (resistance).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Indikator Teknikal</h4>
                <p>Alat bantu seperti Moving Average (MA) (menentukan arah tren), Relative Strength Index (RSI) (mengukur momentum/jenuh beli-jual), dan Bollinger Bands (mengukur volatilitas).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Pola Grafik (Chart Patterns)</h4>
                <p>Bentuk tertentu seperti head and shoulders, double top/bottom, atau triangles yang mengindikasikan kelanjutan atau pembalikan arah harga.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-forex-gold mt-6 mb-4">
              Langkah-langkah Dasar Teknikal Analisis:
            </h3>
            
            <div className="space-y-3">
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">1. Tentukan Tren</h4>
                <p>Gunakan timeframe lebih tinggi untuk melihat arah utama, misalnya dengan trendline.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">2. Identifikasi Level Kunci</h4>
                <p>Tandai area Support dan Resistance kuat.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">3. Tunggu Konfirmasi</h4>
                <p>Gunakan pola candlestick (misal: engulfing, pin bar) sebagai sinyal masuk.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">4. Manajemen Risiko</h4>
                <p>Tetapkan Stop Loss dan Take Profit berdasarkan level teknikal tersebut.</p>
              </div>
            </div>
            
            <p className="mt-4">
              Analisis teknikal sangat populer di kalangan day trader dan scalper karena kemampuannya memproses data harga secara objektif dan cepat.
            </p>
          </div>
        </motion.section>

        {/* Teknikal Analisa Paling Populer */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Teknikal Analisa Paling Populer di Indonesia</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              Teknikal analisis forex paling populer meliputi penggunaan candlestick pattern, support & resistance, serta indikator teknikal seperti Moving Average (MA), RSI, Bollinger Bands, dan MACD. Metode-metode ini digunakan untuk mengidentifikasi tren, volatilitas, dan titik entry/exit pasar. Analisis ini populer karena membantu trader memprediksi arah harga berdasarkan data historis.
            </p>
            
            <h3 className="text-xl font-bold text-forex-gold mt-6 mb-4">
              Berikut adalah rincian teknikal analisis forex yang paling populer:
            </h3>
            
            <div className="space-y-3">
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Candlestick Pattern</h4>
                <p>Bentuk grafik paling populer untuk menganalisis pergerakan harga secara detail (tertinggi, terendah, pembukaan, penutupan) dalam periode tertentu.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Support & Resistance</h4>
                <p>Level psikologis di mana harga cenderung berhenti atau berbalik arah. Ini adalah dasar dari hampir semua analisis teknikal.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Moving Average (MA)</h4>
                <p>Indikator dasar yang meratakan pergerakan harga untuk mengidentifikasi arah tren (misal: SMA 50 atau 200).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Bollinger Bands</h4>
                <p>Indikator untuk mengukur volatilitas pasar dan mengidentifikasi kondisi overbought (jenuh beli) atau oversold (jenuh jual).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Relative Strength Index (RSI)</h4>
                <p>Osilator momentum yang mengukur kecepatan dan perubahan pergerakan harga, umumnya digunakan untuk mencari sinyal reversal.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">MACD</h4>
                <p>Indikator untuk mengonfirmasi tren dan momentum.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Fibonacci Retracement</h4>
                <p>Alat untuk memprediksi potensi level support/resistance koreksi harga.</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-forex-gold mt-6 mb-4">
              Strategi Kombinasi Populer:
            </h3>
            
            <div className="space-y-3">
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Tren + Momentum</h4>
                <p>Menggunakan Moving Average (tren) dan RSI/MACD (momentum).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Volatilitas</h4>
                <p>Bollinger Bands digunakan untuk mengidentifikasi rentang harga (range).</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Price Action</h4>
                <p>Fokus pada pola candlestick di area Support & Resistance.</p>
              </div>
            </div>
            
            <p className="mt-4">
              Trader sering kali menggabungkan beberapa alat ini untuk meningkatkan akurasi sinyal perdagangan.
            </p>
          </div>
        </motion.section>

        {/* Apa itu Bot EA Trading */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Apa itu Bot EA Trading</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              Robot trading forex, atau Expert Advisor (EA), adalah perangkat lunak otomatis yang dirancang untuk membuka dan menutup posisi perdagangan di pasar forex tanpa intervensi manual manusia. EA beroperasi berdasarkan serangkaian aturan teknis (logika ya/tidak) yang sudah diprogram untuk menemukan peluang pasar, mengelola risiko, dan mengeksekusi strategi perdagangan secara 24/7.
            </p>
            
            <h3 className="text-xl font-bold text-forex-gold mt-6 mb-4">
              Poin Penting Mengenai Robot Trading EA Forex:
            </h3>
            
            <div className="space-y-3">
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Fungsi Utama</h4>
                <p>Menganalisis grafik dan mengeksekusi transaksi secara otomatis berdasarkan parameter teknis yang ditentukan sebelumnya.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Fleksibilitas</h4>
                <p>Trader dapat membuat EA sendiri atau mengimpor EA yang sudah ada.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Legalitas</h4>
                <p>Di Indonesia, robot trading atau EA bisa bersifat legal, namun penggunaannya harus mematuhi aturan Bappebti.</p>
              </div>
              
              <div className="bg-forex-primary/50 p-4 rounded-lg">
                <h4 className="font-bold text-forex-green mb-2">Platform</h4>
                <p>Umumnya digunakan pada platform trading populer seperti MetaTrader 4 (MT4) atau MetaTrader 5 (MT5).</p>
              </div>
            </div>
            
            <p className="mt-4">
              Dengan menggunakan EA, trader dapat menghilangkan emosi manusia dari keputusan perdagangan dan memastikan eksekusi cepat, meskipun tetap membutuhkan pemantauan untuk menyesuaikan dengan kondisi pasar yang berubah.
            </p>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={itemVariants}
          className="text-center py-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('join')}
              className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-2xl"
            >
              Segera Join untuk Mendapatkan EA Trading
              <br />
              <span className="text-sm font-normal">(Trial 1-2 Hari)</span>
            </motion.button>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Beranda;