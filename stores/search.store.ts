import { create } from 'zustand';

interface SearchState {
  isOpen: boolean;
  searchText: string;
}

interface SearchStore {
  stores: Partial<Record<string, SearchState>>;
  setSearchText: (id: string, value: string) => void;
  open: (id: string) => void;
  close: (id: string) => void;
  toggle: (id: string) => void;
}

const defaultState: SearchState = {
  isOpen: false,
  searchText: '',
};

export const getOrDefault = (
  stores: Partial<Record<string, SearchState>>,
  id: string,
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
