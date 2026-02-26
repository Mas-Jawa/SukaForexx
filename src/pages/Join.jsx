import { motion } from 'framer-motion';
import { BROKER_LINKS, SOCIAL_LINKS } from '../config/links';

const Join = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            Join SukaForex
          </h1>
          <p className="text-gray-300 text-lg">
            Bergabunglah dengan kami dan mulai trading forex dengan EA Trading premium
          </p>
        </motion.section>

        {/* Broker Section */}
        <motion.section
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="section-title text-center">Broker Terpercaya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BROKER_LINKS.map((broker, index) => (
              <motion.a
                key={broker.name}
                href={broker.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${broker.color} rounded-2xl p-8 shadow-2xl block`}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">{broker.logo}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{broker.name}</h3>
                  <p className="text-white/80 text-sm">Klik untuk daftar</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          variants={itemVariants}
          className="mb-16"
        >
          <h2 className="section-title text-center">Hubungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${social.color} rounded-2xl p-8 shadow-2xl block`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{social.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{social.name}</h3>
                  <p className="text-white/80 text-sm">Klik untuk menghubungi</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Info Section */}
        <motion.section
          variants={itemVariants}
          className="card-gradient rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="section-title text-center">Informasi Penting</h2>
          <div className="space-y-4 text-gray-200">
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">✅ Trial EA Trading</h3>
              <p>Dapatkan akses trial EA Trading selama 1-2 hari setelah mendaftar melalui link kami.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">✅ Support 24/7</h3>
              <p>Tim support kami siap membantu Anda kapan saja melalui Telegram dan WhatsApp.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">✅ Edukasi Gratis</h3>
              <p>Dapatkan materi edukasi trading forex secara gratis setelah bergabung.</p>
            </div>
            
            <div className="bg-forex-primary/50 p-4 rounded-lg">
              <h3 className="font-bold text-forex-gold mb-2">✅ Sinyal Gratis</h3>
              <p>Dapatkan sinyal gratis yang di share di telegram.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Join;
