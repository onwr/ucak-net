import React from 'react';
import Header from '../components/Header';
import Footer from '@components/Footer';
import { motion } from 'framer-motion';

const references = [
  {
    name: 'Şirket 1',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  },
  {
    name: 'Şirket 2',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  },
  {
    name: 'Şirket 3',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  },
  {
    name: 'Şirket 4',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  },
  {
    name: 'Şirket 5',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  },
  {
    name: 'Şirket 6',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  },
  {
    name: 'Şirket 7',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  },
  {
    name: 'Şirket 8',
    logo: '/logo.png',
    category: 'Telekomünikasyon'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const Referanslar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Referanslarımız</h1>
            <p className="text-xl text-gray-600">
              Güvenilir iş ortaklarımız ve değerli müşterilerimizle birlikte büyüyoruz
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {references.map((reference, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-square p-6 flex items-center justify-center">
                  <img
                    src={reference.logo}
                    alt={reference.name}
                    className="max-w-[80%] max-h-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{reference.name}</h3>
                  <p className="text-sm text-gray-200">{reference.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

 
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Referanslar;