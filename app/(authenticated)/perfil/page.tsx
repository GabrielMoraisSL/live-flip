import { Column } from '@/components/column';
import { KPIs, PersonalData, TricksList } from '@/features/profile/components';
export default function Profile() {
  const user = {
    username: 'john_doe',
    name: 'John Doe',
    location: 'New York, USA',
    instance: 'regular',
    photoUrl: '',
    kpis: {
      position: 12,
      points: 1500,
      totalLikes: 300,
      totalAchievements: 20,
    },
    lastUnLockedTrick: { name: 'Treflip', date: '2024-06-01', points: 500 },
  };
  const {
    username,
    name,
    location,
    instance,
    photoUrl,
    lastUnLockedTrick,
    kpis,
  } = user;

  return (
    <Column className='font-bold 2xl:flex-row gap-10 p-10 2xl:p-0 2xl:m-10 w-full border-b-2 border-neutral-700 pb-10 overflow-auto'>
      <Column className='gap-6 w-full'>
        <PersonalData {...{ username, name, location, instance, photoUrl }} />
        <KPIs {...kpis} lastUnLockedTrick={lastUnLockedTrick} />
      </Column>
      <TricksList lastUnLockedTrick={lastUnLockedTrick} />
    </Column>
  );
}
