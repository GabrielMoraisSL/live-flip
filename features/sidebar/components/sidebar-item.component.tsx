'use client';

import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/cn.utils';
import { ScreensItemsType } from '../constants/screens-items.constant';
import { Row } from '@/components/server';

interface SidebarItemProps {
  option: ScreensItemsType;
}

export const SidebarItem = ({ option }: SidebarItemProps) => {
  const router = useRouter();
  const actualRoute = usePathname();
  const activeOption = actualRoute === option.route;
  function handleClick() {
    if (activeOption) return;
    router.push(option.route);
  }
  return (
    <Row
      onClick={handleClick}
      className={cn(
        'gap-3 [&_svg]:size-5 py-2 h-14 max-sm:text-sm font-bold transition-colors tracking-widest hover:bg-neutral-900 cursor-pointer select-none',
        activeOption && 'text-brand-primary',
      )}
    >
      <div
        className={cn(
          'w-1.5 transition-all',
          activeOption && 'bg-brand-primary h-full rounded-r',
        )}
      />
      {option.icon}
      <span>{option.label}</span>
    </Row>
  );
};
