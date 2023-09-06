import React from 'react';
import team from './data';
import TeamCard from './TeamCard';

const TeamSection = () => {
  return (
    <section id='team' className='px-primary py-20 flex flex-col w-full'>
      <div className='md:pl-[30px] md:text-left text-center'>
        <p className='text-secondary mb-[14px] text-lg lg:text-xl font-medium'>
          Our Awesome Personnel
        </p>
        <h2 className='mb-[60px] text-[#785614] font-secondary text-[32px] md:text-[48px] lg:text-[56px] font-extrabold'>
          A1Quest Awesome Team
        </h2>
      </div>

      <div className='items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 w-full gap-[51px]'>
        {team.map((member, index) => (
          <TeamCard key={index} teamMember={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
