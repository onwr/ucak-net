import React from 'react';
import Header from '../components/Header';
import { FaWifi, FaHeadset, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TarifelerComponent from '../components/tarifeler/Tarifeler';
import SSS from '../components/SSS';
import Footer from '../components/Footer';
const features = [
  {
    icon: <FaHeadset className="text-2xl" />,
    title: "Çözüm Odaklı Hizmet Anlayışı",
    description: "Uzman teknik ekibimiz ve çağrı merkezimizle yaşadığınız her türlü problemi en kısa sürede çözmek için çalışmaktayız."
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    title: "Yüksek Performans",
    description: "Fiber alt yapımızla sizlere yüksek hızlı verimli interneti sunuyoruz. Size sadece tadını çıkarmak kalıyor."
  },
  {
    icon: <FaWifi className="text-2xl" />,
    title: "Kesintisiz İnternet",
    description: "7/24 kesintisiz internet hizmeti ile online dünyada her zaman bağlı kalın."
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "Güvenli Bağlantı",
    description: "En son teknoloji güvenlik sistemleri ile güvenli internet deneyimi yaşayın."
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

const Tarifeler = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="pt-20 pb-16 px-4"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  src="/tarifeler.jpg" 
                  alt="UçakNet Tarifeler" 
                  className="rounded-3xl shadow-xl w-full h-auto"
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

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center lg:text-left">
                <motion.h1 
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                >
                  UçakNet Tarifeler
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-600 text-lg"
                >
                  Yüksek hızda taahhütsüz ve limitsiz fiber internet Uçaknet ile evinizde.
                </motion.p>
              </div>

              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-blue-600 p-3 bg-blue-50 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center lg:text-left"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  id='#tarifeler'
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Tarifeleri İncele
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <TarifelerComponent />
      <SSS />
      <Footer />

    </div>
  );
};

export default Tarifeler;
