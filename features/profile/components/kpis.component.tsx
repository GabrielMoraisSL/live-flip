import { Column } from '@/components/server';
import { Row } from '@/components/server';
import { MedalIcon } from '@/public/svg/medal';
import { FaFire } from 'react-icons/fa6';

interface KPIsProps {
  lastUnLockedTrick: {
    name: string;
    points: number;
    date: string;
  };
  position: number;
  points: number;
  totalLikes: number;
  totalAchievements: number;
}

export const KPIs = ({
  lastUnLockedTrick,
  position,
  points,
  totalLikes,
  totalAchievements,
}: KPIsProps) => {
  return (
    <>
      <Column className='max-md:pt-10 gap-2 sm:gap-4 uppercase relative text-gray-500 bg-neutral-800/30 p-6 w-full shadow-hard'>
        <p className='text-black text-xs sm:text-sm italic pl-4 pr-5 absolute right-0 top-0 py-1 bg-brand-primary w-full sm:w-fit'>
          Última conquista: {lastUnLockedTrick.name} +{lastUnLockedTrick.points}{' '}
          pontos
        </p>
        <p className='text-xs sm:text-sm tracking-[0.2em]'>Rank_Stats</p>
        <div className='grid grid-cols-2 w-full'>
          <Column>
            <p className='text-2xl sm:text-4xl text-white'>#{position}</p>
            <p className='text-xs sm:text-sm'>Posição no rank</p>
          </Column>
          <Column>
            <p className='text-2xl sm:text-4xl text-brand-primary'>{points}</p>
            <p className='text-xs sm:text-sm'>Pontos</p>
          </Column>
        </div>
      </Column>
      <Row className='gap-6 sm:gap-8 uppercase text-gray-500'>
        <Column className='gap-2 p-6 [&_svg]:size-5 w-full bg-neutral-800/30 shadow-hard'>
          <FaFire className='text-brand-primary' />
          <p className='text-2xl sm:text-4xl text-white'>{totalLikes}</p>
          <p className='text-xs sm:text-sm'>Likes</p>
        </Column>
        <Column className='gap-2 p-6 [&_svg]:size-6 w-full bg-neutral-800/30 shadow-hard'>
          <MedalIcon className='text-brand-primary' />
          <p className='text-2xl sm:text-4xl text-white'>{totalAchievements}</p>
          <p className='text-xs sm:text-sm'>Conquistas</p>
        </Column>
      </Row>
    </>
  );
};
