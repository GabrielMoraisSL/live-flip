import { cn } from '@/lib/cn.utils';
import { usePathname, useRouter } from 'next/navigation';
import { Column } from '@/components/server';
import { ScreensItemsType } from '@/features/sidebar/constants/screens-items.constant';

export const MenuItem = ({ icon, label, route }: ScreensItemsType) => {
  const router = useRouter();
  const activeOption = usePathname();
  return (
    <div className='flex w-1/3 my-3 text-neutral-500 cursor-pointer justify-center'>
      <Column
        onClick={() => router.push(route)}
        className={cn(
          'w-fit gap-2 transition-all items-center [&>svg]:size-6',
          activeOption === route && 'text-brand-primary',
        )}
      >
        {icon}
      </Column>
    </div>
  );
};
