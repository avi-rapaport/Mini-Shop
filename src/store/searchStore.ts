import { create } from 'zustand';

interface Search {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useSearchStore = create<Search>((set) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
