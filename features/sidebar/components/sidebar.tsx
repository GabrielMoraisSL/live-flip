'use client';
import { FaSignOutAlt } from 'react-icons/fa';
import SidebarItem from './sidebar-item';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/features/sidebar/stores/store-sidebar';
import { Column } from '@/components/column';
import { Row } from '@/components/row';
import { SCREENS_ITEMS } from '../constants';
import DialogOverlay from '@/components/dialog-overlay';

export const Sidebar = () => {
  const { isOpen, close } = useSidebarStore();
  return (
    <>
      <DialogOverlay isOpen={isOpen} close={close} />

      <Column
        className={cn(
          'flex absolute lg:relative uppercase top-0 h-dvh sm:h-full text-gray-300 transition-transform duration-200 bg-neutral-900 lg:bg-neutral-800/30 justify-between lg:pb-20 w-[80%] sm:w-sm lg:w-2xs self-stretch',
          isOpen ? 'translate-x-0 z-50' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <Column className='gap-0'>
          <div className='hidden lg:block px-6 py-10 text-brand-primary text-xs tracking-[0.2em]'>
            underground network
          </div>
          {SCREENS_ITEMS.map((option) => (
            <SidebarItem key={option.label} option={option} />
          ))}
        </Column>
        <Column className='gap-6'>
          <button className='bg-brand-primary font-bold shadow-hard-gray text-black py-4 mx-10'>
            Desbloqueei uma
          </button>
          <button className='text-lg p-10'>
            <Row className='gap-2 font-bold'>
              <FaSignOutAlt />
              Logout
            </Row>
          </button>
        </Column>
      </Column>
    </>
  );
};
