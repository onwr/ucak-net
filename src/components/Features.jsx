import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '/kotasiz.svg',
    title: 'Tahhütsüz ve Kotasız',
    description: 'Kota aşımı ve sürpriz fatura olmadan taahhütsüz internetin tadını çıkartın.'
  },
  {
    icon: '/yuksek-performans.svg',
    title: 'Yüksek Performans',
    description: 'Online oyunlarda ping ve ms süreleri ile yine en hızlısı AtlantisNet'
  },
  {
    icon: '/hizli-baglanti.svg',
    title: 'Hızlı Bağlantı',
    description: 'GigaPon ile eşit indirme ve yükleme ile en hızlı internet hizmetimizi deneyimleyin.'
  },
  {
    icon: '/turkiyede-ilk.svg',
    title: 'Türkiyede Bir İlk',
    description: '10.000 Mbps\'e kadar indirme ve yükleme sunabilen tek internet servis sağlayıcısı'
  },
  {
    icon: '/guvenli.svg',
    title: 'Güvenli İnternet',
    description: 'Güvenli İnternet Hizmeti ile sevdiklerinizi zararlı içeriklerinden koruyabilirsiniz.'
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

const Features = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 py-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <motion.img
              src={feature.icon}
              className="size-20"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h3
              className="mt-4 text-center text-xl font-bold text-black"
              whileHover={{ scale: 1.05 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="mt-2 text-center text-sm text-gray-700"
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