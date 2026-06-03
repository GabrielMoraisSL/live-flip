'use client';
import { SCREENS_ITEMS } from '@/features/sidebar/constants';
import { Row } from '../row.component';
import MenuItem from './menu-item.component';

export default function BottomMenu() {
  return (
    <Row className='w-full gap-10 justify-between py-2 px-10 border-t border-neutral-700 lg:hidden bg-black'>
      {SCREENS_ITEMS.map((option) => (
        <MenuItem key={option.label} {...option} />
      ))}
    </Row>
  );
}
