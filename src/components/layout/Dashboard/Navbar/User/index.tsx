'use client';
import { useAppSelector } from '@/store/hooks';
import React, { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';
import ClickAwayListener from 'react-click-away-listener';
import { getNameInitials } from '@/functions/stringManipulations';
import UserMenu from './UserMenu';

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
      <div className='flex items-center' ref={parentRef}>
        <div className='relative'>
          <button onClick={() => setOpen(true)} className='flex items-center relative'>
            <div className='w-10 h-10 bg-secondary flex items-center justify-center rounded-full font-semibold text-sm text-black uppercase'>
              {getNameInitials(user?.firstName + ' ' + user?.lastName || '')}
            </div>
          </button>
          {open && <UserMenu />}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default User;
