import { SystemEnums } from '@/enums/system-enums';
import { create } from 'zustand';

type SearchInputIds = SystemEnums.EnumsIds.SearchInput;

interface SearchState {
  isOpen: boolean;
  searchText: string;
}

interface SearchStore {
  stores: Partial<Record<SearchInputIds, SearchState>>;
  setSearchText: (id: SearchInputIds, value: string) => void;
  open: (id: SearchInputIds) => void;
  close: (id: SearchInputIds) => void;
  toggle: (id: SearchInputIds) => void;
}

const defaultState: SearchState = {
  isOpen: false,
  searchText: '',
};

export const getOrDefault = (
  stores: Partial<Record<SearchInputIds, SearchState>>,
  id: SearchInputIds,
) => stores[id] ?? defaultState;

export const useSearchStore = create<SearchStore>()((set) => ({
  stores: {},

  setSearchText: (id, value) =>
    set((state) => ({
      stores: {
        ...state.stores,
        [id]: { ...getOrDefault(state.stores, id), searchText: value },
      },
    })),

  open: (id) =>
    set((state) => ({
      stores: {
        ...state.stores,
        [id]: { ...getOrDefault(state.stores, id), isOpen: true },
      },
    })),

  close: (id) =>
    set((state) => ({
      stores: {
        ...state.stores,
        [id]: { ...getOrDefault(state.stores, id), isOpen: false },
      },
    })),

  toggle: (id) =>
    set((state) => {
      const current = getOrDefault(state.stores, id);
      return {
        stores: {
          ...state.stores,
          [id]: { ...current, isOpen: !current.isOpen },
        },
      };
    }),
}));
