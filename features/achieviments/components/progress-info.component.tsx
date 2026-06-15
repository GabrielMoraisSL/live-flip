'use client';

import { Column, ProgressBar, Row } from '@/components/server';
import { calculatePercentage } from '@/lib/helpers';

export const ProgressInfo = () => {
  const mocks = {
    totalUnlockeds: 9,
    total: 40,
  };
  const { totalUnlockeds, total } = mocks;

  const percentageByTotals = calculatePercentage(totalUnlockeds, total);

  return (
    <Column className='sm:w-1/2 gap-2 bg-neutral-900/50 p-5 rounded-lg'>
      <Row className='justify-between w-full font-bold'>
        <p className='text-xl text-neutral-400'>
          Conclusão total
        </p>
        <h3 className='text-4xl text-brand-primary'>
          {percentageByTotals}%
        </h3>
      </Row>
      <ProgressBar percent={percentageByTotals} />
    </Column>
  );
};
