import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaShieldAlt, FaExchangeAlt, FaCheckCircle } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaClock className="text-2xl" />,
    title: "Taahhüt Takibi",
    description: "Mevcut taahhüt sürenizi kolayca takip edin"
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "Güvenli Geçiş",
    description: "Kesintisiz ve güvenli operatör değişimi"
  },
  {
    icon: <FaExchangeAlt className="text-2xl" />,
    title: "Kolay Geçiş",
    description: "Tek tıkla operatör değişimi yapın"
  },
  {
    icon: <FaCheckCircle className="text-2xl" />,
    title: "Avantajlı Fırsatlar",
    description: "Taahhüt bitiminde özel kampanyalardan yararlanın"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const TaahhutSayaci = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
          >
            UçakNet Taahhüt Sayacı
          </motion.h1>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Taahhüt sayacı, taahhütlü internet kullanmak istemeyenler için ideal bir çözümdür. Artık
              yeni bir taahhüt yapmadan veya başvuru süreniz bitmeden önce size sunacağımız avantajları
              değerlendirebilir ve en uygun olan fırsattan yararlanabilirsiniz!
            </p>
            <p className="text-gray-600 leading-relaxed">
              Taahhüt Sayacı'nın size sağladığı avantajlardan biri, mevcut operatörünüzün yüksek fiyatlı
              taahhütlü paketler sunmaya çalışmasından korumasıdır. Ayrıca taahhüt sürenizin dolmasına
              yakın hatırlatma yaparak sizi AtlantisNet'e davet eder.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-blue-600 p-2 bg-blue-50 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <img 
              src="/taahhut-sayac.webp" 
              alt="Taahhüt Sayacı" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-10 blur-2xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TaahhutSayaci;