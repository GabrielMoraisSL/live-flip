import { Column } from '@/components/column';
import { cn } from '@/lib/utils';
import { FaFire } from 'react-icons/fa6';

interface TrickCardProps {
  name: string;
  points: number;
  isUnlocked: boolean;
  isNew: boolean;
}

export default function TrickCard({
  isNew,
  isUnlocked,
  name,
  points,
}: TrickCardProps) {
  return (
    <Column className='gap-2 border shadow-hard relative bg-neutral-800 border-gray-600'>
      {isNew && (
        <p className='text-white text-sm px-4 absolute right-0 top-0 py-1 bg-brand-primary w-fit'>
          Nova conquista!
        </p>
      )}
      <FaFire
        className={cn(
          'size-5 text-gray-300',
          isUnlocked && 'text-brand-primary',
        )}
      />
      <span className='text-xs text-gray-500'>+{points}</span>
      <span className='text-gray-300'>{name}</span>
    </Column>
  );
}
