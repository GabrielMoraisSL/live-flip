import { Column } from '@/components/column';
import { Row } from '@/components/row';
import dayjs from 'dayjs';

interface TricksListProps {
  lastUnLockedTrick: {
    name: string;
    date: string;
    points: number;
  };
}

export default function TricksList({ lastUnLockedTrick }: TricksListProps) {
  return (
    <Column className='gap-10 w-full'>
      <Row className='text-2xl text-gray-300 w-full border-b border-neutral-700 pb-4 uppercase justify-between items-end'>
        <span className='italic'>Trick_Journey</span>{' '}
        <span className='text-xs text-gray-500'>
          <span className='tracking-[0.2em]'>última atualização:</span>{' '}
          {dayjs(lastUnLockedTrick.date).format('DD.MM.YYYY')}
        </span>
      </Row>
      <Column className='gap-4 uppercase'>
        <Row className='text-brand-primary gap-4 text-xl'>
          <span className='tracking-widest'>01_Base</span>
          <div className='min-w-full h-px bg-neutral-800' />
        </Row>
      </Column>
      <Column className='gap-4 uppercase'>
        <Row className='text-brand-primary gap-4 text-xl'>
          <span className='tracking-widest'>02_Nollie</span>
          <div className='min-w-full h-px bg-neutral-800' />
        </Row>
      </Column>
      <Column className='gap-4 uppercase'>
        <Row className='text-brand-primary gap-4 text-xl'>
          <span className='tracking-widest'>03_Fakie</span>
          <div className='min-w-full h-px bg-neutral-800' />
        </Row>
      </Column>
      <Column className='gap-4 uppercase'>
        <Row className='text-brand-primary gap-4 text-xl'>
          <span className='tracking-widest'>04_Switch</span>
          <div className='min-w-full h-px bg-neutral-800' />
        </Row>
      </Column>
    </Column>
  );
}
