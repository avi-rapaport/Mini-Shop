import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Products</h1>
      <SearchBar />
      <div className="products-list"></div>
    </div>
  );
};

export default HomePage;
