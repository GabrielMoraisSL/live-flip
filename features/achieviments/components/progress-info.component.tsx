'use client';

import { Column, ProgressBar, Row } from '@/components/server';
import { cn } from '@/lib/cn.utils';
import { calculatePercentage } from '@/lib/helpers';
import { useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

export const ProgressInfo = () => {
  const mocks = {
    unlockedsByInstances: [
      {
        id: 1,
        name: 'Base',
        totalUnlockeds: 5,
        total: 10,
      },
      {
        id: 2,
        name: 'Fakie',
        totalUnlockeds: 3,
        total: 10,
      },
      {
        id: 3,
        name: 'Nollie',
        totalUnlockeds: 1,
        total: 10,
      },
      {
        id: 4,
        name: 'Switch',
        totalUnlockeds: 0,
        total: 10,
      },
    ],
    totalUnlockeds: 9,
    total: 40,
  };
  const { unlockedsByInstances, totalUnlockeds, total } = mocks;

  const percentageByTotals = calculatePercentage(totalUnlockeds, total);
  const [openDetails, setOpenDetails] = useState(true);

  return (
    <Column className='w-full sm:w-96 p-5 gap-2 bg-neutral-900 rounded-lg self-start items-end'>
      <h3 className='text-4xl font-bold text-brand-primary'>
        {percentageByTotals}%
      </h3>
      <Column className='gap-2 w-full items-end'>
        <p className='text-xs text-neutral-400 tracking-widest'>
          Conclusão total
        </p>
        <ProgressBar percent={percentageByTotals} />
      </Column>
      <Column className='w-full'>
        <button
          type='button'
          onClick={() => setOpenDetails(!openDetails)}
          className='text-xs text-neutral-400 tracking-widest'
        >
          <Row className='gap-2'>
            Visualizar {!openDetails ? 'mais' : 'menos'} detalhes
            {!openDetails ? <BiSolidChevronDown /> : <BiSolidChevronUp />}
          </Row>
        </button>
        <Column
          className={cn(
            'w-full h-0 transition-all',
            openDetails && 'h-30 gap-2 mt-2',
          )}
        >
          {unlockedsByInstances.map((instance) => {
            const percentage = calculatePercentage(
              instance.totalUnlockeds,
              instance.total,
            );
            return (
              <Column
                key={instance.id}
                className={cn(
                  'w-full overflow-hidden transition-all text-sm duration-500',
                  !openDetails && 'h-0 opacity-0',
                )}
              >
                <Column className='w-full flex-row items-center justify-between'>
                  <h4>{instance.name}</h4>
                  <p>{percentage}%</p>
                </Column>
                <ProgressBar percent={percentage} />
              </Column>
            );
          })}
        </Column>
      </Column>
    </Column>
  );
};
