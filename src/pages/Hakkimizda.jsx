import React from 'react'
import Header from '../components/Header'
import Footer from '@components/Footer';
const Hakkimizda = () => {
  return (
    <div>
      <Header />
      <div className='container mx-auto flex items-center py-20'>
        <div className='w-1/2'>
          <img src='/hakkimizda.png' alt='Hakkımızda' />
        </div>
        <div className='w-1/2'>
          <h1 className='text-4xl font-bold'>UçakNet Hakkında</h1>
          <p className='mt-4 text-lg'>
            UçakNet, Türkiye genelinde faaliyet gösteren, Bireysel ve Kurumsal müşterilerine
            Radyolink(Airfiber İnternet), ADSL, VDSL ve Fiber internet hizmetleri sunan yeni nesil
            telekomünikasyon şirketidir.
          </p>

          <p className='mt-4 text-lg'>
            UçakNet olarak 2014 yılından itibaren müşterilerimizi karmaşık internet tarifelerinden
            arındırıyor, taahhütsüz, kotasız avantajlı hizmet ve kampanyalarımızı eve kadar kurulum
            seçeneğiyle siz değerli abonelerimizle buluşturuyoruz. UçakNet alt yapı ve fiber
            çalışmalarımız ile müşterilerimizin ilerleyen teknolojiye kaliteli ve hızlı bir şekilde
            ulaşmalarını sağlıyoruz.
          </p>

          <p className='mt-4 text-lg'>
            Atlantisnet’e değer katan tüm müşterilerimize, iş ortakları ve çalışanlarımıza teşekkür
            ederiz.
          </p>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Hakkimizda