import React from 'react';
import { TeamType } from './data';
import Image from 'next/image';

const TeamCard = ({ teamMember }: { teamMember: TeamType }) => {
  return (
    <div
      className='w-full rounded-[20px] bg-white'
      style={{
        boxShadow: '0px 30px 44px 0px rgba(200, 200, 200, 0.25)',
      }}
    >
      <Image
        src={teamMember.image}
        alt='Team Member'
        className='w-full h-auto object-cover rounded-t-[20px]'
      />
      <div className='pb-[65px] pt-4 px-[25px] flex flex-col gap-[10px]'>
        <p className='text-xl text-[#06102B] font-extrabold font-secondary'>
          {teamMember.name}
        </p>
        <p className='text-[#64748B] '>{teamMember.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
