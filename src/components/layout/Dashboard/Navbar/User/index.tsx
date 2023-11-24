'use client';
import { useAppSelector } from '@/store/hooks';
import React, { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';
import ClickAwayListener from 'react-click-away-listener';
import { getNameInitials } from '@/functions/stringManipulations';
import UserMenu from './UserMenu';
import Image from 'next/image';

const User = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='flex items-center min-w-fit' ref={parentRef}>
        <div className='relative min-w-fit'>
          <button onClick={() => setOpen(true)} className='flex items-center relative'>
            {user?.profilePicture ? (
              <Image
                src={user.profilePicture || ''}
                width={40}
                height={40}
                className='object-cover rounded-full w-10 h-10'
                alt='User Image'
              />
            ) : (
              <div className='w-10 h-10 bg-secondary flex items-center justify-center rounded-full font-semibold text-sm text-black uppercase'>
                {getNameInitials(user?.firstName + ' ' + user?.lastName || '')}
              </div>
            )}
          </button>
          {open && <UserMenu />}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default User;
