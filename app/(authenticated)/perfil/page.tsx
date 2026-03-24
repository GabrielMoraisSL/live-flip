import { Column } from '@/components/column';
import Image from 'next/image';
import UserImage from '../../../public/teste-publi.jpg';
import { Row } from '@/components/row';
import { IoMdPin } from 'react-icons/io';
import dayjs from 'dayjs';
export default function Profile() {
  const user = {
    username: 'john_doe',
    name: 'John Doe',
    location: 'New York, USA',
    instance: 'regular',
    photoUrl: '/path/to/photo.jpg',
    lastUnLockedTrickDate: '2024-06-01',
    position: 12,
    points: 1500,
    totalLikes: 300,
    totalAchievements: 20,
  };
  const {
    username,
    name,
    location,
    instance,
    photoUrl,
    lastUnLockedTrickDate,
    points,
    position,
    totalAchievements,
    totalLikes,
  } = user;
  return (
    <Column className='font-bold 2xl:flex-row gap-10 p-10 w-full'>
      <Column className='gap-4 w-full'>
        <div className='p-2 border-2 border-brand-secondary w-fit border-dotted rotate-2'>
          <Image
            src={UserImage}
            alt={username}
            width={200}
            height={200}
            className='bg-black p-1 -rotate-2'
          />
        </div>
        <p className='text-brand-secondary text-3xl normal-case'>@{username}</p>
        <Column className='bg-black/15 p-4 w-2/3 rounded-r-md text-gray-500 uppercase border-l-2 border-brand-primary pl-4 gap-2'>
          <p>
            <span className='text-xs'>Nome:</span> {name}
          </p>
          <p className='[&_svg]:size-5 text-brand-primary'>
            <span className='text-xs'>Local:</span> {location}
          </p>
          <p>
            <span className='text-xs'>Base:</span> {instance}
          </p>
        </Column>
        <Column className='gap-4 uppercase text-gray-500 bg-neutral-800/30 p-6 w-full shadow-hard'>
          <p className='text-sm tracking-[0.2em]'>Rank_Stats</p>
          <div className='grid grid-cols-2 w-full'>
            <Column className='justify-center text-center'>
              <p className='text-4xl text-white'>#{position}</p>
              <p className='text-sm'>Posição no rank</p>
            </Column>
            <Column className='justify-center text-center'>
              <p className='text-4xl text-brand-primary'>{points}</p>
              <p className='text-sm'>Pontos</p>
            </Column>
          </div>
        </Column>
        <div className='grid grid-cols-2 uppercase'></div>
      </Column>
      <Column className='gap-10 w-full'>
        <Row className='text-2xl text-gray-300 w-full border-b border-neutral-700 pb-4 uppercase justify-between items-end'>
          <span className='italic'>Trick_Journey</span>{' '}
          <span className='text-xs font-normal text-gray-500'>
            <span className='tracking-[0.2em]'>última atualização:</span>{' '}
            {dayjs(lastUnLockedTrickDate).format('DD.MM.YYYY')}
          </span>
        </Row>
        <Column className='gap-4'></Column>
      </Column>
    </Column>
  );
}
