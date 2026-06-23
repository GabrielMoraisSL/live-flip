'use client';
import { Row } from '@/components/server';
import { cn } from '@/lib/cn.utils';

export type TabOption<T extends string = string> = {
  value: T;
  label: string;
};

type TabsProps<T extends string = string> = {
  options: TabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

export const Tabs = <T extends string = string>({
  options,
  value,
  onChange,
  className,
}: TabsProps<T>) => {
  return (
    <Row className={cn('max-sm:grid grid-cols-4 gap-2', className)}>
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type='button'
            onClick={() => {
              if (isActive) return;
              onChange(option.value);
            }}
            className={cn(
              'flex items-center text-center max-sm:text-xs sm:px-6 py-2 cursor-pointer bg-neutral-900 text-sm font-semibold text-neutral-300 uppercase',
              isActive && 'bg-brand-primary cursor-default',
            )}
          >
            <span className='mx-auto'>{option.label}</span>
          </button>
        );
      })}
    </Row>
  );
};