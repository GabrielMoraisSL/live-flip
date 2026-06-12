'use client';
import { Column, ProgressBar, Row } from '@/components/server';
import { ValuesEnums } from '@/enums/values';
import { cn } from '@/lib/cn.utils';
import { InstancesLabelsMapper } from '../constants';
import { TrickCard } from './trick-card.component';
import { useTricksByInstance } from '../hooks';
import { LoadingWrapper } from '@/components/server/wrappers/loading-wrapper.component';

export const TricksList = () => {
  const {
    states: { data, activeTab },
    handlers: { setActiveTab },
  } = useTricksByInstance();

  return (
    <Column className='gap-10'>
      <Row className='gap-2'>
        {Object.values(ValuesEnums.Instances).map((instance) => {
          const isActive = activeTab === instance;
          return (
            <button
              key={instance}
              type='button'
              onClick={() => {
                if (isActive) return;
                setActiveTab(instance);
              }}
              className={cn(
                'flex items-center px-6 py-2 cursor-pointer bg-neutral-900 text-sm font-semibold text-neutral-300 uppercase',
                isActive && 'bg-brand-primary cursor-default',
              )}
            >
              <span className='pt-1'>{InstancesLabelsMapper[instance]}</span>
            </button>
          );
        })}
      </Row>
      <Column className='w-1/2 gap-2 bg-neutral-900/50 p-5 rounded-lg'>
        <Row className='justify-between w-full font-bold'>
          <p className='text-xl text-neutral-400 capitalize'>Progresso: {activeTab}</p>
          <h3 className='text-4xl text-brand-primary'>{data?.percentage}%</h3>
        </Row>
        <ProgressBar percent={data?.percentage} />
      </Column>
      <LoadingWrapper isLoading={false}>
        <div className='grid grid-cols-4 gap-4'>
          {data?.tricks.map((trick) => (
            <TrickCard key={trick.id} {...trick} />
          ))}
        </div>
      </LoadingWrapper>
    </Column>
  );
};
