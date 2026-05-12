import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { Column } from '../column';
import { ScreensItemsType } from '@/features/sidebar/constants/screens-items';

export default function MenuItem({ icon, label, route }: ScreensItemsType) {
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
}
