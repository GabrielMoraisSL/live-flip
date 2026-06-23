'use client';

import { Row } from '@/components/server';
import { getOrDefault, useSearchStore } from '@/stores/search.store';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchInputProps {
  id: string;
}

export const SearchInput = ({ id }: SearchInputProps) => {
  const { setSearchText, stores } = useSearchStore();
  const searchState = getOrDefault(stores, id);
  return (
    <div className='flex h-12 bg-transparent transition-all text-gray-400 duration-500 ease-in-out justify-end'>
      <Row className='gap-4 w-full transition-all bg-neutral-900 rounded-full px-4 py-2 duration-500 ease-in-out justify-end items-center overflow-hidden'>
        <IoSearchOutline className='size-6 shrink-0 transition-all duration-400' />
        <input
          type='text'
          placeholder='Pesquise por Usuários ou Títulos...'
          value={searchState.searchText}
          onChange={(e) => setSearchText(id, e.target.value)}
          className='size-full bg-transparent focus:outline-none placeholder:text-gray-400'
        />
      </Row>
    </div>
  );
};
