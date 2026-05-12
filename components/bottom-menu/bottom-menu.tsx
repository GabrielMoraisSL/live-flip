'use client';
import { SCREENS_ITEMS } from '@/features/sidebar/constants';
import { Row } from '../row';
import MenuItem from './menu-item';

export default function BottomMenu() {
  return (
    <Row className='w-full gap-10 justify-between px-10 lg:hidden border-t border-neutral-700 bg-black'>
      {SCREENS_ITEMS.map((option) => (
        <MenuItem key={option.label} {...option} />
      ))}
    </Row>
  );
}
