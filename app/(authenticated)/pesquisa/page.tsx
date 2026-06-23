import { SearchInput, Tabs } from '@/components/client';
import { Column } from '@/components/server';
import { ValuesEnums } from '@/enums/values';
import { ResultsList } from '@/features/search/components';

export default function Search() {
  return (
    <Column className='w-full p-10'>
      <SearchInput id={ValuesEnums.SearchIds.SearchPage} />
      <ResultsList />
    </Column>
  );
}
