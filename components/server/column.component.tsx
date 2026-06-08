import { cn } from '@/lib/cn.utils';
import { forwardRef } from 'react';

export const Column = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn('flex flex-col transition-all', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Column.displayName = 'Column';
