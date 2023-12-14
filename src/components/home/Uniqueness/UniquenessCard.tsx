import React from 'react';
import { data } from './data';

const UniquenessCard = ({ item }: { item: data }) => {
  return (
    <div
      className='rounded-xl w-full md:w-[309px] border border-[#DADADA] px-4 py-3 flex flex-col gap-3'
      style={{
        backgroundColor: item.color,
      }}
    >
      <p className='font-semibold text-xl'>{item.title}</p>
      <p className='font-light text-[#242424]'>{item.description}</p>
    </div>
  );
};

export default UniquenessCard;
