'use client';

import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '@/assets/icons/menu.svg';
import Image from 'next/image';
import ClickAwayListener from 'react-click-away-listener';
import autoAnimate from '@formkit/auto-animate';
import navLinks from './navLinks';
import Link from 'next/link';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='flex items-center md:hidden' ref={parentRef}>
        <div className='relative'>
          <button onClick={() => setOpen(true)} className='flex items-center relative'>
            <Image src={MenuIcon} alt='Menu' />
          </button>
          {open && (
            <nav className='rounded-lg absolute left-0 top-12 bg-white w-60 z-30 drop-shadow-md'>
              <ul className='flex-col flex w-full'>
                {navLinks.map((item) => (
                  <div
                    key={item.href}
                    className='px-5 py-3 w-full hover:text-white text-[#06102B] hover:bg-primary duration-300 '
                  >
                    <Link href={item.href} className=' text-lg w-full'>
                      {item.label}
                    </Link>
                  </div>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default MobileMenu;
