import React from 'react';
import { Policies } from './policies';

const PolicyList = () => {
  return (
    <div className='flex w-full flex-col gap-10'>
      {Policies.map((policy, index) => (
        <div key={index}>
          <h2
            className='font-secondary text-[#0C1F56] text-2xl font-bold mb-4'
            id={policy.title}
          >
            {policy.title}
          </h2>
          <div className='text-[#3C3C3C]'>{policy.content}</div>
        </div>
      ))}
    </div>
  );
};

export default PolicyList;
