import { Column } from '@/components/column.component';
import { Row } from '@/components/row.component';
import dayjs from 'dayjs';
import TrickCard from './trick-card.component';

interface TricksListProps {
  lastUnLockedTrick: {
    name: string;
    date: string;
    points: number;
  };
}

const mockTricks = [
  {
    name: 'Base',
    tricks: [
      { name: 'Treflip', points: 500, isNew: true },
      { name: 'Heelflip', points: 400, isNew: false },
      { name: '360 Flip', points: 600, isNew: false },
    ],
  },
  {
    name: 'Nollie',
    tricks: [
      { name: 'Nollie Treflip', points: 500, isNew: true },
      { name: 'Nollie Heelflip', points: 400, isNew: false },
      { name: 'Nollie 360 Flip', points: 600, isNew: false },
      { name: 'Nollie Treflip', points: 500, isNew: true },
      { name: 'Nollie Heelflip', points: 400, isNew: false },
      { name: 'Nollie 360 Flip', points: 600, isNew: false },
    ],
  },
  {
    name: 'Switch',
    tricks: [
      { name: 'SS Treflip', points: 500, isNew: true },
      { name: 'SS Heelflip', points: 400, isNew: false },
      { name: 'SS 360 Flip', points: 600, isNew: false },
    ],
  },
  {
    name: 'Fakie',
    tricks: [
      { name: 'Fakie Treflip', points: 500, isNew: true },
      { name: 'Fakie Heelflip', points: 400, isNew: false },
      { name: 'Fakie 360 Flip', points: 600, isNew: false },
    ],
  },
];

export default function TricksList({ lastUnLockedTrick }: TricksListProps) {
  return (
    <Column className='gap-5 w-full'>
      <Column className='md:flex-row text-xl sm:text-2xl text-gray-300 w-full border-b border-neutral-700 pb-4 uppercase justify-between max-md:gap-3 md:items-end'>
        <span className='italic'>Conquistas_desbloqueadas</span>{' '}
        <span className='text-xs text-gray-500'>
          <span className='tracking-[0.2em]'>última atualização:</span>{' '}
          {dayjs(lastUnLockedTrick.date).format('DD.MM.YYYY')}
        </span>
      </Column>
      <Column className='gap-10 overflow-auto md:pr-4 pb-2 2xl:pb-6'>
        {mockTricks.map((trickGroup, idx) => (
          <Column className='gap-4 uppercase' key={trickGroup.name}>
            <Row className='text-brand-primary gap-4 text-xl'>
              <span className='tracking-[0.2em]'>
                {idx + 1}_{trickGroup.name}
              </span>
              <div className='w-full h-px bg-neutral-800' />
            </Row>
            <div className='flex flex-wrap gap-5'>
              {trickGroup.tricks.map((trick) => (
                <TrickCard {...trick} key={trick.name} isUnlocked />
              ))}
            </div>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
