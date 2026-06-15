import { cn } from '@/lib/cn.utils';
import { ReactNode } from 'react';

export const LoadingWrapper = ({
  children,
  isLoading,
}: {
  children?: ReactNode;
  isLoading: boolean;
}) => (
  <div className='relative'>
    <div
      className={cn(
        'grid place-items-center size-full transition-opacity absolute duration-500',
        !isLoading && 'opacity-0 pointer-events-none',
      )}
    >
      <div className='w-12 h-12 rounded-full border-4 border-gray-200 border-t-brand-primary animate-spin' />
    </div>
    <div
      className={cn(
        'opacity-0 pointer-events-none transition-opacity duration-500',
        !isLoading && 'opacity-100',
      )}
    >
      {children}
    </div>
  </div>
);
