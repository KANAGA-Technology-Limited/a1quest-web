'use client';

import React, { useEffect, useRef, useState } from 'react';
import { StreakIcon } from '../../navIcons';
import autoAnimate from '@formkit/auto-animate';
import ClickAwayListener from 'react-click-away-listener';
import StreakMenu from './StreakMenu';

const Streak = () => {
  const [open, setOpen] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='relative'>
        <button className='flex items-center ' onClick={() => setOpen(true)}>
          <StreakIcon />
          <span>12</span>
        </button>
        {open && <StreakMenu />}
      </div>
    </ClickAwayListener>
  );
};

export default Streak;
