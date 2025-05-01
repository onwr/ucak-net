import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Uçak24',
    price: '300₺',
    color: '#561a57',
    image: '/tarife1.webp',
    features: [
      'Online Özel Fırsat',
      'Tahhütsüz',
      '24 Mbps Download',
      '4 Mbps Upload',
      'Limitsiz'
    ]
  },
  {
    name: 'Uçak35',
    price: '350₺',
    color: '#043d5d',
    image: '/tarife2.webp',
    features: [
      'Online Özel Fırsat',
      'Tahhütsüz',
      '35 Mbps Download',
      '5 Mbps Upload',
      'Limitsiz'
    ]
  },
  {
    name: 'Uçak50',
    price: '400₺',
    color: '#efa90f',
    image: '/tarife3.webp',
    features: [
      'Online Özel Fırsat',
      'Tahhütsüz',
      '50 Mbps Download',
      '5 Mbps Upload',
      'Limitsiz'
    ]
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

const TarifelerComponent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex gap-4 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="w-full">
              <motion.img
                src={plan.image}
                alt={plan.name}
                className="aspect-square h-full w-full object-cover object-top"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="w-full p-6">
              <motion.p 
                className="text-4xl font-bold"
                style={{ color: plan.color }}
              >
                {plan.name}
              </motion.p>
              <motion.p className="mt-5 text-xl">
                Aylık / <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
              </motion.p>
              <motion.div 
                className="mt-5 h-0.5 w-full"
                style={{ backgroundColor: plan.color }}
              />
              {plan.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="mt-5 flex items-center gap-2.5"
                >
                  <FaCheckCircle style={{ color: plan.color }} />
                  <p className="text-xl font-extrabold">{feature}</p>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-5 w-full rounded-md px-4 py-2 text-white font-semibold"
                style={{ backgroundColor: plan.color }}
              >
                Hemen Ara
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TarifelerComponent;