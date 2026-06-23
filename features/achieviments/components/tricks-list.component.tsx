'use client';
import { Tabs } from '@/components/client';
import { Column, ProgressBar, Row } from '@/components/server';
import { LoadingWrapper } from '@/components/server/wrappers/loading-wrapper.component';
import { useTricksByInstance } from '../hooks';
import { TrickCard } from './trick-card.component';

export const TricksList = () => {
  const {
    states: { data, activeTab, tabOptions },
    handlers: { setActiveTab },
  } = useTricksByInstance();

  return (
    <Column className='gap-6 sm:gap-10'>
      <Tabs options={tabOptions} value={activeTab} onChange={setActiveTab} />

      <Column className='lg:w-1/2 gap-2 bg-neutral-900/50 p-5 rounded-lg'>
        <Row className='justify-between w-full font-bold'>
          <p className='text-xl text-neutral-400 capitalize'>
            Progresso: {activeTab}
          </p>
          <h3 className='text-4xl text-brand-primary'>{data?.percentage}%</h3>
        </Row>
        <ProgressBar percent={data?.percentage} />
      </Column>
      <LoadingWrapper isLoading={false}>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {data?.tricks.map((trick) => (
            <TrickCard key={trick.id} {...trick} />
          ))}
        </div>
      </LoadingWrapper>
    </Column>
  );
};
