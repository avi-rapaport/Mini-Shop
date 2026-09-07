import type { RefObject } from 'react';
import { useSearchStore } from '../store/searchStore';

interface inputRef {
  ref: RefObject<HTMLInputElement | null>;
}

const SearchBar = ({ ref }: inputRef) => {
  const searchQuery = useSearchStore((state) => state.searchQuery);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  return (
    <input
      className="search-bar"
      name="search"
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      ref={ref}
      placeholder="🔍Search products..."
    />
  );
};

export default SearchBar;
