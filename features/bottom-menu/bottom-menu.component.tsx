'use client';
import { SCREENS_ITEMS } from '@/features/sidebar/constants';
import { Row } from '@/components/server';
import { MenuItem } from './menu-item.component';

export const BottomMenu = () => {
  return (
    <Row className='fixed bottom-0 w-full gap-10 justify-between py-2 px-10 lg:hidden bg-neutral-950/40 backdrop-blur-md z-50'>
      {SCREENS_ITEMS.map((option) => (
        <MenuItem key={option.label} {...option} />
      ))}
    </Row>
  );
};
