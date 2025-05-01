import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'Fatura Ödememi Nereden yapabilirim',
    answer: 'Faturalarınızı online olarak web sitemizden, mobil uygulamamızdan veya banka şubelerinden ödeyebilirsiniz.'
  },
  {
    question: 'İnternet hızımı nasıl kontrol edebilirim?',
    answer: 'Web sitemizdeki hız testi aracını kullanarak veya mobil uygulamamızdan internet hızınızı anlık olarak kontrol edebilirsiniz.'
  },
  {
    question: 'Taahhüt süresi nedir?',
    answer: 'Taahhüt süresi, hizmet sözleşmesinin geçerli olduğu süredir. Taahhütsüz paketlerimizde herhangi bir süre sınırlaması bulunmamaktadır.'
  },
  {
    question: 'Teknik destek hizmeti nasıl alabilirim?',
    answer: '7/24 teknik destek hizmetimize 0850 123 45 67 numaralı telefondan veya web sitemizdeki canlı destek üzerinden ulaşabilirsiniz.'
  },
  {
    question: 'Download nedir?',
    answer: 'Download, internet bağlantınızın indirme hızını ölçen bir testtir. Bu test, internet bağlantınızın indirme hızını ölçer ve bu hızınızın ne kadar olduğunu gösterir.'
  },
  {
    question: 'Upload nedir?',
    answer: 'Upload, internet bağlantınızın yükleme hızını ölçen bir testtir. Bu test, internet bağlantınızın yükleme hızını ölçer ve bu hızınızın ne kadar olduğunu gösterir.'
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

const SSS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Sıkça Sorulan Sorular</h1>
          <p className="text-xl text-gray-600">
            Merak ettiğiniz tüm soruları bize iletebilir Atlantisnet fiber internet altyapısı hakkında
            bilgi sahibi olabilirsiniz.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-10 blur-2xl" />
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-2xl text-blue-500" />
                  ) : (
                    <FaPlus className="text-2xl text-blue-500" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SSS;