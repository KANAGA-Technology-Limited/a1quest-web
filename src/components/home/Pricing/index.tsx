import React from 'react';
import pricing from './data';
import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='bg-[#0C1F56] px-primary py-20 flex flex-col items-center w-full'
    >
      <h1 className='font-secondary text-[32px] md:text-[48px] lg:text-[56px] text-white text-center font-extrabold'>
        Simple and Transparent Pricing
      </h1>
      <p className='text-white text-center text-lg lg:text-xl mt-[10px] mb-[60px]'>
        Straight to the point pricing plans. No surprises or hidden charges. All is clear.
      </p>
      <div className='flex items-center justify-center gap-6 flex-wrap'>
        {pricing.map((item) => (
          <PricingCard key={item.title} pricing={item} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
