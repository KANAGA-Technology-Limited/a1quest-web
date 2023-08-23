'use client';
import React, { useState } from 'react';
import navLinks from '../../navLinks';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getNameInitials } from '@/functions/stringManipulations';
import { useRouter } from 'next/navigation';
import { appAxios } from '@/api/axios';
import { sendCatchFeedback } from '@/functions/feedback';
import { signOut } from '@/store/features/user';
import { DeleteIcon, FreezeIcon, LogoutIcon } from '../../navIcons';
import Modals from '../Modals';

const UserMenu = () => {
  const { user } = useAppSelector((state) => state.user);

  const [deleteModal, setDeleteModal] = useState(false);
  const [freezeModal, setFreezeModal] = useState(false);
  const [unfreezeModal, setUnFreezeModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <>
      <nav className='rounded-lg absolute right-0 top-14 bg-white w-60 z-10 drop-shadow-md'>
        <div className='p-6 pb-0 flex flex-col gap-[6px]'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-secondary flex items-center justify-center rounded-full font-semibold text-sm text-black uppercase'>
              {getNameInitials(user?.firstName + ' ' + user?.lastName || '')}
            </div>
            <span className='text-lg font-medium'>
              {user?.firstName + ' ' + user?.lastName || ''}
            </span>
          </div>
          <Link href='/dashboard/account' className='text-primary text-sm'>
            Manage your account
          </Link>
        </div>
        <div className='h-[0.6px] w-full bg-[#D0D5DD] mt-2 mb-5' />
        <ul className='text-[#64748B] text-sm flex flex-col gap-5 md:gap-3 px-6 md:hidden'>
          {navLinks
            .filter((item) => item.type !== 'divider')
            .map((item) => (
              <Link href={item.href} key={item.href}>
                <li className='flex items-center gap-2'>
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              </Link>
            ))}
        </ul>
        <div className='h-[0.6px] w-full bg-[#D0D5DD] my-5 md:hidden' />
        <div className='text-[#64748B] text-sm flex flex-col gap-5 md:gap-3 px-6'>
          <button
            className='flex items-center gap-2 cursor-pointer'
            onClick={() =>
              user?.isNotFreezed ? setFreezeModal(true) : setUnFreezeModal(true)
            }
          >
            <FreezeIcon />
            {user?.isNotFreezed ? (
              <span>Freeze Account</span>
            ) : (
              <span>Unfreeze Account</span>
            )}
          </button>

          <button
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => setDeleteModal(true)}
          >
            <DeleteIcon />
            <span>Delete Account</span>
          </button>
        </div>
        <div className='flex justify-center pt-[25px] py-[23px]'>
          <button
            className=' text-sm cursor-pointer font-medium flex items-center gap-2 text-[#A0ABBB]'
            onClick={() => setLogoutModal(true)}
          >
            <LogoutIcon />
            <span>Sign out</span>
          </button>
        </div>
      </nav>
      <Modals
        deleteModal={deleteModal}
        freezeModal={freezeModal}
        unfreezeModal={unfreezeModal}
        logoutModal={logoutModal}
        setDeleteModal={setDeleteModal}
        setFreezeModal={setFreezeModal}
        setUnFreezeModal={setUnFreezeModal}
        setLogoutModal={setLogoutModal}
      />
    </>
  );
};

export default UserMenu;
