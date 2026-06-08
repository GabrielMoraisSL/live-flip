'use client';

import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/cn.utils';
import { ScreensItemsType } from '../constants/screens-items.constant';
import { Row } from '@/components/server/row.component';

interface SidebarItemProps {
  option: ScreensItemsType;
}

export const SidebarItem = ({ option }: SidebarItemProps) => {
  const router = useRouter();
  const activeOption = usePathname();
  return (
    <Row
      onClick={() => router.push(option.route)}
      className={cn(
        'gap-3 [&_svg]:size-5 px-6 py-4 max-sm:text-sm font-bold transition-colors tracking-widest hover:bg-neutral-900 cursor-pointer select-none',
        activeOption === option.route && 'bg-brand-primary! text-black',
        option.hideOnDesktop && 'lg:hidden',
      )}
    >
      {option.icon}
      <span>{option.label}</span>
    </Row>
  );
};
