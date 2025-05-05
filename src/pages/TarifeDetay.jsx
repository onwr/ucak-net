import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '@components/Footer';
import { FaInfoCircle } from 'react-icons/fa';

const plans = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

const TarifeDetay = () => {
  const { id } = useParams();
  const plan = plans.find(p => p.id === Number(id));

  if (!plan) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Tarife Bulunamadı</h1>
            <p className="text-gray-600">Aradığınız tarife mevcut değil.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <div className='container mx-auto flex flex-col items-start gap-10 px-4 py-12 md:flex-row'>
        <div className='flex w-full justify-center md:w-1/3 md:justify-start'>
          <img
            src={plan.image}
            alt={plan.name}
            className='mx-auto rounded-2xl bg-gray-50 object-contain shadow-md'
          />
        </div>
        <div className='w-full md:w-2/3'>
          <h1 className='mb-4 text-3xl font-bold text-gray-900'>{plan.name}</h1>
          <div className='mb-4 flex items-center gap-3'>
            <div className='flex items-center gap-2 rounded-md bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800'>
              <FaInfoCircle className='text-lg' />
              Bu tarife yalnızca AtlantisNet Wifi altyapısında geçerlidir.
            </div>
          </div>
          <div className='mb-4 text-xs text-gray-500'>
            Güncel Wifi kapsama alanını öğrenmek için çağrı merkezimizi arayabilirsiniz.
          </div>
          <p className='mb-8 max-w-2xl leading-relaxed text-gray-700'>
            {plan.features.join(', ')} ile yüksek hızlı internet deneyimi yaşayın.
          </p>
          <div className='mb-8'>
            <div className='mb-2 text-lg font-bold'>Tarife Bilgileri</div>
            <div className='flex flex-wrap gap-3'>
              {plan.features.map((feature, i) => (
                <span
                  key={i}
                  className='rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800'
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className='mb-8'>
            <div className='mb-1 text-4xl font-bold text-gray-900'>
              {plan.price} <span className='text-lg font-medium'>TL/Aylık</span>
            </div>
            <div className='text-base font-medium text-gray-600'>Tüm Vergiler Dahildir.</div>
          </div>
          <div className='mb-8 flex gap-4'>
            <button className='rounded-full bg-blue-700 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-800'>
              Hemen Ara
            </button>
            <a
              href='https://www.turktelekom.com.tr/altyapi-sorgulama'
              className='rounded-full bg-red-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-600'
            >
              Altyapı Sorgula
            </a>
          </div>
          <div className='max-w-2xl divide-y divide-gray-200'>
            <details className='group py-4'>
              <summary className='cursor-pointer font-semibold text-blue-900 transition-colors group-open:text-blue-700'>
                Kampanya Hakkında
              </summary>
              <div className='mt-2 text-sm text-gray-700'>
                Kampanya hakkında detaylı bilgi için çağrı merkezimizi arayabilirsiniz.
              </div>
            </details>
            <details className='group py-4'>
              <summary className='cursor-pointer font-semibold text-blue-900 transition-colors group-open:text-blue-700'>
                Kampanya Şartları
              </summary>
              <div className='mt-2 text-sm text-gray-700'>
                Kampanya şartları ve kullanım koşulları için lütfen müşteri temsilcimizle iletişime
                geçin.
              </div>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TarifeDetay; 