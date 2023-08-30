import React from 'react';

const ProgressLevel = ({ level }: { level: number }) => {
  return (
    <div className='w-full bg-[#D9D9D9] rounded-[4px] h-[10px]'>
      <div
        className='bg-[#C88F21] rounded-[4px] h-[10px]'
        style={{
          width: `${level}%`,
        }}
      />
    </div>
  );
};

export default ProgressLevel;
