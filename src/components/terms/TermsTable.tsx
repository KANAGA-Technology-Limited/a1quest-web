import React from 'react';
import { Terms } from './terms';
import Link from 'next/link';

const TermsTable = () => {
  return (
    <aside className='border rounded-lg px-7 py-8 w-full border-[#DADADA] md:w-[40%]'>
      <h2 className='text-2xl font-medium mb-[15px] font-secondary'>
        Table of contents:
      </h2>
      <div className='text-primary text-sm flex flex-col gap-3'>
        {Terms.map((term) => (
          <Link key={term.title} href={'#' + term.title}>
            {term.title}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default TermsTable;
