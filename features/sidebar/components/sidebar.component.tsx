'use client';
import { FaSignOutAlt } from 'react-icons/fa';
import SidebarItem from './sidebar-item.component';
import { cn } from '@/lib/cn.utils';
import { useSidebarStore } from '@/features/sidebar/stores/sidebar.store';
import { Column } from '@/components/column.component';
import { Row } from '@/components/row.component';
import { SCREENS_ITEMS } from '../constants';
import DialogOverlay from '@/components/dialog-overlay.component';
import { USER_MOCK } from '@/features/profile/mocks';
import Image from 'next/image';

export const Sidebar = () => {
  const { isOpen, close } = useSidebarStore();
  const { instance, location, photoUrl, username } = USER_MOCK;
  return (
    <>
      <DialogOverlay isOpen={isOpen} close={close} />

      <Column
        className={cn(
          'flex absolute lg:relative border-r-2 border-brand-primary z-50 uppercase top-0 h-dvh sm:h-full text-gray-300 transition-transform duration-200 bg-neutral-950 w-[80%] sm:w-sm lg:w-2xs self-stretch',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <Column className='justify-center font-bold p-5 gap-1'>
          <div className='flex items-center justify-center mb-4 mx-auto size-30 rounded-full border-2 border-dashed border-brand-primary p-2'>
            <div className='w-full h-full rounded-full overflow-hidden'>
              <Image
                alt='user-image'
                src={photoUrl}
                width={150}
                height={150}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
          <p className='text-xl sm:text-2xl text-brand-secondary'>
            @{username}
          </p>
          <p className='text-xs sm:text-sm text-neutral-500'>{instance}</p>
          <p className='text-xs sm:text-sm text-neutral-500'>{location}</p>
        </Column>
        <Column className='h-full border-y border-neutral-800'>
          {SCREENS_ITEMS.map((option) => (
            <SidebarItem key={option.label} option={option} />
          ))}
        </Column>
        <button className='text-sm sm:text-lg p-5 text-neutral-500 cursor-pointer'>
          <Row className='gap-2 font-bold'>
            <FaSignOutAlt />
            Logout
          </Row>
        </button>
      </Column>
    </>
  );
};
