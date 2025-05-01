import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '/yardim-destek.png',
    title: 'Yardım & Destek',
    description: 'İnternet hizmetiniz ile ilgili merak ettiğiniz her sorunun cevabına buradan ulaşabilirsiniz.',
  },
  {
    icon: '/gecis.png',
    title: 'Geçiş mi yapacaksın',
    description: 'Hizmet almakta olduğunuz internet sağlayıcınızı değiştirmeyi düşünüyorsanız hemen bizimle iletişime geçin.',
  },
  {
    icon: '/abonemiz-degil.png',
    title: 'Abonemiz değil misin?',
    description:
      'Yüksek fatura ödemeden kotasız ve taahhütsüz fiber internet hizmetinin keyfini çıkartmak için hemen bize katıl.',
  },
  {
    icon: '/tasiniyor-musun.png',
    title: 'Taşınıyor musunuz?',
    description: "Yeni bir adrese taşınıyorsanız tek yapmanız gereken çağrı merkezimiz üzerinden nakil kaydınızı oluşturmanız.",
  },
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Features = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className='container mx-auto px-4 py-10'
    >
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className='flex flex-col items-center justify-center rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10'
          >
            <motion.img
              src={feature.icon}
              className='size-20'
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h3
              className='mt-4 text-center text-xl font-bold text-black'
              whileHover={{ scale: 1.05 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className='mt-2 text-center text-sm text-gray-700'
              whileHover={{ scale: 1.02 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
