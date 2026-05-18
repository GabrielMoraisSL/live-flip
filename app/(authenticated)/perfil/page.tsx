import { Column } from '@/components/column.component';
import { KPIs, PersonalData, TricksList } from '@/features/profile/components';
import { USER_MOCK } from '@/features/profile/mocks';
export default function Profile() {
  const {
    username,
    name,
    location,
    instance,
    photoUrl,
    lastUnLockedTrick,
    kpis,
  } = USER_MOCK;

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
