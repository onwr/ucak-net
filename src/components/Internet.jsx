import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  "10.000 Mbps'e kadar hız deneyimi",
  "Taahhütsüz ve kotasız internet",
  "En uygun internet tarifeleri",
  "Güvenli internet koruması",
  "Kolay internet başvurusu",
  "Güvenli internet koruması"
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

const Internet = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 py-10 md:py-16"
    >
      <motion.div 
        variants={itemVariants}
        className="flex-1 flex items-center justify-center flex-col mb-10 md:mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-4xl text-center font-extrabold mb-4"
        >
          UçakNet ile 1000 Mbps Kotasız ve Tahhütsüz internet!
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-base text-center max-w-xl text-gray-600"
        >
          UçakNet'li olmanın tam sırası kendi sunmuş olduğu GigaPon altyapısı ile 10.000 Mbps'e
          kadar gerçek fiber internet deneyimini size sunmaktadır. Karmaşık değil çok net sloganımız
          ile en hızlı internet ayrıca kotasız ve taahhütsüz.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <motion.div 
              className="bg-green-700 rounded-full p-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaCheck className="text-white" />
            </motion.div>
            <p className="text-sm md:text-base text-gray-700">{feature}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Internet;