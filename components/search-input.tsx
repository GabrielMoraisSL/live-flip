'use client';

import { Row } from '@/components/row';
import { SystemEnums } from '@/enums/system.enum';
import { getOrDefault, useSearchStore } from '@/stores/search.store';
import { FaSearch } from 'react-icons/fa';

type SearchInputIds = SystemEnums.EnumsIds.SearchInput;

interface SearchInputProps {
  id: SearchInputIds;
}

export default function SearchInput({ id }: SearchInputProps) {
  const { setSearchText, stores } = useSearchStore();
  const searchState = getOrDefault(stores, id);
  return (
    <div className='flex h-full bg-transparent transition-all duration-500 ease-in-out justify-end'>
      <Row className='gap-4 w-full md:w-xl transition-all bg-neutral-900 rounded-full px-4 py-2 duration-500 ease-in-out justify-end items-center overflow-hidden'>
        <input
          type='text'
          placeholder='Pesquise por Usuários ou Títulos...'
          value={searchState.searchText}
          onChange={(e) => setSearchText(id, e.target.value)}
          className='size-full bg-transparent focus:outline-none'
        />
        <FaSearch className='w-6 h-5 shrink-0 transition-all duration-400' />
      </Row>
    </div>
  );
}
