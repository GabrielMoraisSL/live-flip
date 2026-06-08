import { cn } from '@/lib/cn.utils';
import { forwardRef } from 'react';

export const Row = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn('flex transition-all items-center gap-1', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Row.displayName = 'Row';
