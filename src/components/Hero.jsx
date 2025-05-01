import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/pingsiz-ve-kesintisiz-internet.jpg',
    title: 'Pingsiz ve Kesintisiz İnternet',
    description: 'Yüksek hızlı ve stabil internet deneyimi için doğru adres'
  },
  {
    image: '/taahhutlu-internet.jpg',
    title: 'Minimum Ping Maksimum Performans',
    description: 'Güvenilir ve kesintisiz internet hizmeti'
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full"
        >
          <div className="relative w-full h-full">
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5 }}
            />
            <div className="absolute inset-0 bg-black/5 bg-opacity-40" />
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="absolute left-10 md:left-40 top-1/2 -translate-y-1/2 text-white max-w-xl"
            >
              <motion.h2
                variants={textVariants}
                className="text-4xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="text-xl"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;