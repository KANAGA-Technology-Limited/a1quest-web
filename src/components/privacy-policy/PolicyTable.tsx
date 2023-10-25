import React from 'react';
import { Policies } from './policies';
import Link from 'next/link';

const PolicyTable = () => {
  return (
    <aside className='border rounded-lg px-7 py-8 w-full border-[#DADADA] md:w-[40%]'>
      <h2 className='text-2xl font-medium mb-[15px] font-secondary'>
        Table of contents:
      </h2>
      <div className='text-primary text-sm flex flex-col gap-3'>
        {Policies.map((policy) => (
          <Link key={policy.title} href={'#' + policy.title}>
            {policy.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default PolicyTable;
