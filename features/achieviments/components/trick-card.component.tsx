import { Column, Row } from '@/components/server';
import { cn } from '@/lib/cn.utils';
import { FaCircleCheck, FaRegClock } from 'react-icons/fa6';

interface TrickCardProps {
  name: string;
  points: number;
  isUnlocked: boolean;
  description: string;
}

export const TrickCard = ({
  isUnlocked,
  name,
  points,
  description,
}: TrickCardProps) => {
  return (
    <Column
      className={cn(
        'gap-10 min-w-full min-h-60 p-5 uppercase bg-neutral-800 justify-between text-gray-300',
        isUnlocked && 'bg-brand-primary text-black',
      )}
    >
      <Row className='justify-between w-full [&>svg]:size-5'>
        {isUnlocked ? <FaCircleCheck /> : <FaRegClock />}
        <span>+{points} pts</span>
      </Row>
      <Row className='justify-between w-full'>
        <Column className='gap-2'>
          <p className='text-3xl font-bold break-all'>{name}</p>
          <p className={cn('text-xs text-gray-300', isUnlocked && 'text-neutral-900')}>{description}</p>
        </Column>
      </Row>
    </Column>
  );
};
