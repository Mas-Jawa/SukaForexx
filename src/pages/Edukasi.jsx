import { motion } from 'framer-motion';

const Edukasi = () => {
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
      className="pt-24 pb-12 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.section
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Edukasi Trading
          </h1>
          <p className="text-gray-300 text-lg">
            Pelajari trading forex dari dasar hingga mahir
          </p>
        </motion.section>

        {/* Introduction */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Pengantar Edukasi Trading Forex</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              Edukasi trading forex mencakup pemahaman mekanisme pasar mata uang, analisis teknikal dan fundamental, serta manajemen risiko yang ketat. Pemula wajib memulai dengan akun demo untuk berlatih, memahami leverage, spread, margin, dan menggunakan stop loss untuk membatasi kerugian.
            </p>
          </div>
        </motion.section>

        {/* Dasar-Dasar Trading Forex */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Dasar-Dasar Trading Forex (Pemula)</h2>
          <div className="space-y-4 text-gray-200">
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">📚 Konsep Dasar</h3>
              <p>Jual-beli pasangan mata uang (contoh: EUR/USD) untuk mengambil selisih keuntungan.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">📊 Analisis Teknikal</h3>
              <p>Menggunakan indikator (RSI, Moving Average, dll) dan grafik untuk memprediksi arah harga.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">📰 Analisis Fundamental</h3>
              <p>Memahami pengaruh berita ekonomi, suku bunga, dan kebijakan negara terhadap nilai mata uang.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">🎯 Akun Demo</h3>
              <p>Latihan di akun simulasi wajib sebelum menggunakan uang riil untuk menghindari kerugian instan.</p>
            </div>
          </div>
        </motion.section>

        {/* Manajemen Risiko dan Strategi */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Manajemen Risiko dan Strategi</h2>
          <div className="space-y-4 text-gray-200">
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-green mb-2">🛡️ Stop Loss & Take Profit</h3>
              <p>Tentukan batas rugi dan target untung yang jelas sebelum membuka posisi.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-green mb-2">⚖️ Leverage & Margin</h3>
              <p>Gunakan leverage secara bijak karena dapat melipatgandakan keuntungan maupun kerugian.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-green mb-2">💰 Manajemen Modal</h3>
              <p>Jangan mengambil risiko lebih dari 1-3% dari total modal per transaksi.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-green mb-2">📝 Jurnal Trading</h3>
              <p>Catat setiap transaksi untuk mengevaluasi kinerja dan strategi.</p>
            </div>
          </div>
        </motion.section>

        {/* Tips Memulai */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 mb-8 shadow-2xl"
        >
          <h2 className="section-title">Tips Memulai</h2>
          <div className="space-y-4 text-gray-200">
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">✅ Pilih Broker Resmi</h3>
              <p>Pastikan broker teregulasi (di Indonesia oleh Bappebti).</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">📖 Edukasi Berkelanjutan</h3>
              <p>Pelajari pola candlestick, tren pasar, dan terus mengasah disiplin emosional.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">🎯 Mulai dengan Akun Demo</h3>
              <p>Berlatih terlebih dahulu sebelum menggunakan uang asli.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">⏰ Patuhi Jadwal Trading</h3>
              <p>Pilih waktu trading yang sesuai dengan sesi pasar dan jadwal Anda.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">🧘 Jaga Emosi</h3>
              <p>Hindari trading saat emosi tidak stabil (marah, sedih, atau terlalu euforia).</p>
            </div>
          </div>
        </motion.section>

        {/* Important Warning */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-2xl p-8 shadow-2xl border-2 border-red-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-400">
            ⚠️ Peringatan Penting
          </h2>
          <div className="space-y-4 text-gray-200">
            <p className="font-bold text-red-300">
              Trading forex melibatkan risiko tinggi dan mungkin tidak cocok untuk semua investor.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Pastikan Anda memahami sepenuhnya risiko yang terlibat</li>
              <li>Hanya investasikan uang yang Anda siap kehilangan</li>
              <li>Gunakan manajemen risiko yang tepat</li>
              <li>Jangan pernah trading dengan uang pinjaman</li>
              <li>Pelajari dan berlatih sebelum trading dengan uang asli</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Edukasi;