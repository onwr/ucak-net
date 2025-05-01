import React, { useState } from 'react';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWifi, FaDownload, FaUpload, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import Footer from '@components/Footer';
import SSS from '@components/SSS';

const SpeedTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showFaq, setShowFaq] = useState(false);

  const startTest = async () => {
    setIsTesting(true);
    setProgress(0);
    setResults(null);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    try {
      // Simulate speed test
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Generate random but realistic results
      const downloadSpeed = (Math.random() * 50 + 20).toFixed(2);
      const uploadSpeed = (Math.random() * 20 + 5).toFixed(2);
      const ping = Math.floor(Math.random() * 20 + 5);

      setResults({
        download: downloadSpeed,
        upload: uploadSpeed,
        ping: ping
      });
    } catch (error) {
      console.error('Speed test failed:', error);
    } finally {
      setIsTesting(false);
      clearInterval(progressInterval);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-blue-50'>
      <Header />

      <div className='container mx-auto px-4 pt-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mx-auto'
        >
          <div className='mb-10'>
            <h1 className='mb-4 text-4xl font-bold text-gray-800'>İnternet Hız Testi</h1>
            <p className='text-xl text-gray-600'>
              İnternet bağlantınızın gerçek hızını ölçün ve performansını değerlendirin
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className='rounded-2xl bg-white p-8 shadow-xl'
          >
            <div className='mb-8 flex justify-center'>
              <div className='relative'>
                <div className='flex h-48 w-48 items-center justify-center rounded-full border-8 border-blue-100'>
                  {isTesting ? (
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-blue-600'>{progress}%</div>
                      <div className='text-sm text-gray-500'>Test Yapılıyor...</div>
                    </div>
                  ) : results ? (
                    <div className='text-center'>
                      <div className='text-3xl font-bold text-blue-600'>{results.download}</div>
                      <div className='text-sm text-gray-500'>Mbps</div>
                    </div>
                  ) : (
                    <FaWifi className='text-6xl text-blue-500' />
                  )}
                </div>
                {isTesting && (
                  <motion.div
                    className='absolute inset-0 rounded-full border-8 border-blue-500'
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </div>
            </div>

            {results && (
              <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
                <div className='rounded-xl bg-blue-50 p-6 text-center'>
                  <FaDownload className='mx-auto mb-2 text-3xl text-blue-500' />
                  <div className='text-2xl font-bold text-gray-800'>{results.download}</div>
                  <div className='text-sm text-gray-600'>İndirme Hızı (Mbps)</div>
                </div>
                <div className='rounded-xl bg-green-50 p-6 text-center'>
                  <FaUpload className='mx-auto mb-2 text-3xl text-green-500' />
                  <div className='text-2xl font-bold text-gray-800'>{results.upload}</div>
                  <div className='text-sm text-gray-600'>Yükleme Hızı (Mbps)</div>
                </div>
                <div className='rounded-xl bg-purple-50 p-6 text-center'>
                  <FaInfoCircle className='mx-auto mb-2 text-3xl text-purple-500' />
                  <div className='text-2xl font-bold text-gray-800'>{results.ping}</div>
                  <div className='text-sm text-gray-600'>Ping (ms)</div>
                </div>
              </div>
            )}

            <div className='text-center'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={startTest}
                disabled={isTesting}
                className={`rounded-lg px-8 py-3 font-semibold text-white ${
                  isTesting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors duration-300`}
              >
                {isTesting ? 'Test Yapılıyor...' : 'Hız Testi Başlat'}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-10 flex flex-col gap-2 md:flex-row md:gap-8'
          >
            <div className='w-full md:w-1/4'>
              <img
                src='/hiztestinedir.webp'
                alt='İnternet Hız Testi'
                className='h-full w-full rounded-2xl object-cover'
              />
            </div>
            <div className='flex w-full flex-col justify-center space-y-6 md:w-1/2'>
              <h2 className='text-3xl font-bold text-gray-800'>İnternet Hız Testi Nedir?</h2>
              <p className='text-lg text-gray-600'>
                İnternet hız testi, internet bağlantınızın gerçek performansını ölçen bir araçtır.
                Bu test sayesinde indirme (download), yükleme (upload) hızlarınızı ve ping
                değerinizi öğrenebilirsiniz. Hız testi, internet servis sağlayıcınızın size
                vadettiği hıza ulaşıp ulaşmadığınızı kontrol etmenizi sağlar.
              </p>
              <p className='text-lg text-gray-600'>
                Modern internet hız testleri, çeşitli sunucularla iletişim kurarak bağlantınızın
                performansını ölçer. Bu sayede gerçek dünya koşullarında internet bağlantınızın
                nasıl performans gösterdiğini anlayabilirsiniz.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-10 flex flex-col gap-2 md:flex-row md:gap-8'
          >
            <div className='w-full md:w-1/4'>
              <img
                src='/dikkatedilmeli.webp'
                alt='İnternet Hız Testi'
                className='h-full w-full rounded-2xl object-cover'
              />
            </div>
            <div className='flex w-full flex-col justify-center space-y-6 md:w-1/2'>
              <h2 className='text-3xl font-bold text-gray-800'>İnternet Hız Testi Nedir?</h2>
              <p className='text-lg text-gray-600'>
                İnternet hız testi, internet bağlantınızın gerçek performansını ölçen bir araçtır.
                Bu test sayesinde indirme (download), yükleme (upload) hızlarınızı ve ping
                değerinizi öğrenebilirsiniz. Hız testi, internet servis sağlayıcınızın size
                vadettiği hıza ulaşıp ulaşmadığınızı kontrol etmenizi sağlar.
              </p>
              <p className='text-lg text-gray-600'>
                Modern internet hız testleri, çeşitli sunucularla iletişim kurarak bağlantınızın
                performansını ölçer. Bu sayede gerçek dünya koşullarında internet bağlantınızın
                nasıl performans gösterdiğini anlayabilirsiniz.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SSS />
      <Footer />
    </div>
  );
};

export default SpeedTest;