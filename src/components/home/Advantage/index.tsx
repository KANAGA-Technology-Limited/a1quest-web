import React from 'react';
import AdvantageImage from '@/assets/images/home/advantage.webp';
import Image from 'next/image';

const AdvantageSection = () => {
  return (
    <div className='bg-[#E8EDFB80] px-primary py-[100px] flex lg:justify-between flex-wrap lg:flex-nowrap justify-center items-center gap-10'>
      <div>
        <h2 className='text-[32px] md:text-[48px] lg:text-[56px] font-extrabold mb-3 text-[#242424]'>
          Advantages for parents
        </h2>
        <p className='text-lg font-normal text-[#3C3C3C]'>
          Lorem ipsum dolor sit amet consectetur. Dui ac tempus pellentesque quam felis
          vel id turpis. Blandit ultricies vel.
        </p>
      </div>
      <div>
        <Image src={AdvantageImage} alt='Advantage' />
      </div>
    </div>
  );
};

export default AdvantageSection;
