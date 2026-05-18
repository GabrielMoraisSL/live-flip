'use client';
import { FaBars } from 'react-icons/fa6';
import { Row } from '@/components/row';
import { useSidebarStore } from '@/features/sidebar/stores/index.store';
import SearchInput from '@/components/search-input';
import { SystemEnums } from '@/enums/system.enum';

const SearchInputIds = SystemEnums.EnumsIds.SearchInput;

export function Header() {
  const { toggle } = useSidebarStore();
  return (
    <Row className='uppercase relative min-w-full h-16 justify-between px-10 border-b border-neutral-700 bg-black text-gray-300'>
      <Row className='max-lg:grid grid-cols-3 w-full justify-between'>
        <button onClick={toggle} className='lg:hidden'>
          <FaBars className='size-5' />
        </button>
        <h1 className='text-brand-primary text-2xl sm:text-3xl font-bold italic max-lg:text-center'>
          LiveFlip
        </h1>
        <div className='w-full max-lg:hidden'>
          <SearchInput id={SearchInputIds.Header} />
        </div>
      </Row>
    </Row>
  );
}
