'use client';

import React from 'react';
import Logo from '@/assets/brand/logo.svg';
import LogoSmall from '@/assets/brand/logo-small.svg';
import Link from 'next/link';
import Image from 'next/image';
import navLinks from './navLinks';
import Button from '@/common/Button/Button';
import { useAppSelector } from '@/store/hooks';
import User from '../Dashboard/Navbar/User';
import MobileMenu from './MobileMenu';

const Navbar = ({ staticHeader = false }: { staticHeader?: boolean }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { user } = useAppSelector((state) => state.user);

  const changeNavBg = () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 80) {
      // 80 is the nav height
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.document.addEventListener('scroll', changeNavBg);

    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <nav
      className='w-full fixed top-0 left-0 right-0 h-20 duration-200 transition-colors z-20'
      style={{
        backgroundColor: staticHeader ? 'white' : isScrolled ? 'white' : 'transparent',
        position: staticHeader ? 'static' : 'fixed',
      }}
    >
      <div className='w-full items-center flex justify-between px-primary h-full'>
        {/* Logo */}
        <div className='flex items-center gap-5'>
          <MobileMenu />
          <Link href='/'>
            <Image
              src={Logo}
              alt='A1 Quest Logo'
              height={50}
              className='w-auto h-[50px] object-contain hidden md:block'
            />
            <Image
              src={LogoSmall}
              height={50}
              alt='A1 Quest Logo'
              className='w-auto h-[50px] object-contain md:hidden'
            />
          </Link>
        </div>

        {/* Nav links */}
        <ul className='items-center gap-[36px] lg:gap-[48px] xl:gap-[56px] justify-center hidden md:flex'>
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className='text-[#06102B] text-lg'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        {user ? (
          <User />
        ) : (
          <Link href='/auth/login'>
            <Button variant='outlined'>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
