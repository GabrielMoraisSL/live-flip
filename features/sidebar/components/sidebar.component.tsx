'use client';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Column } from '@/components/server';
import { Row } from '@/components/server';
import { FaSignOutAlt } from 'react-icons/fa';
import { SCREENS_ITEMS } from '../constants';
import { SidebarItem } from './sidebar-item.component';
import { ValuesEnums } from '@/enums/values';

export const Sidebar = () => {
  const router = useRouter();

  async function handleSignOut() {
    await signOut({ redirect: false });
    router.push(ValuesEnums.Routes.Login);
  }

  return (
    <>
      <Column className='max-lg:hidden flex absolute lg:relative border-r border-brand-primary z-50 uppercase top-0 h-dvh sm:h-full text-gray-300 transition-transform duration-200 bg-neutral-950 w-[80%] sm:w-sm lg:w-3xs self-stretch'>
        <h1 className='text-brand-primary text-2xl sm:text-3xl font-bold italic max-lg:text-center m-5'>
          LiveFlip
        </h1>
        <Column className='h-full border-y border-neutral-800 py-2'>
          {SCREENS_ITEMS.map((option) => (
            <SidebarItem key={option.label} option={option} />
          ))}
        </Column>
        <button
          onClick={handleSignOut}
          className='text-sm sm:text-lg p-5 text-neutral-500 cursor-pointer'
        >
          <Row className='gap-2 font-bold'>
            <FaSignOutAlt />
            Logout
          </Row>
        </button>
      </Column>
    </>
  );
};
