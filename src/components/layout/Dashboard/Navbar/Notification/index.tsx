'use client';
import React, { useEffect, useRef, useState } from 'react';
import { NotificationIcon } from '../../navIcons';
import autoAnimate from '@formkit/auto-animate';
import ClickAwayListener from 'react-click-away-listener';
import NotificationMenu from './NotificationMenu';

const Notification = () => {
  const [open, setOpen] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <button className='relative' onClick={() => setOpen(true)}>
        <NotificationIcon />
        <div className='absolute bottom-[2px] left-0 right-0 flex justify-center'>
          <div className='w-[6px] h-[6px] rounded-full bg-error ' />
        </div>
        {open && <NotificationMenu />}
      </button>
    </ClickAwayListener>
  );
};

export default Notification;
