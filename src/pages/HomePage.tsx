import { useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import type { Product } from '../types/product';
import { useSearchStore } from '../store/searchStore';

const HomePage = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchQuery = useSearchStore((state) => state.searchQuery);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  const url = 'https://fakestoreapi.com/products';
  const { data: products, loading, error } = useFetch<Product[]>(url);

  useEffect(() => {
    if (searchRef.current && !loading) {
      searchRef.current?.focus();
    }
  }, [loading, setSearchQuery]);

  if (loading) return <h1>Loading products...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!products || products.length === 0) {
    return <h1 className="empty-message">Products not found!</h1>;
  }

  const filterProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Products</h1>
      <SearchBar ref={searchRef} />
      <div className="products-list">
        {filterProducts.length === 0 ? (
          <h2>Cannot find products matching {searchQuery} !</h2>
        ) : (
          filterProducts.map((p) => <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </div>
  );
};

export default HomePage;
