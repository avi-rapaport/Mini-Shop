import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useFavoritesStore } from '../store/favoritesStore';

const Header = () => {
  const favoritesAmount = useFavoritesStore((state) => state.favorites).length;
  const location = useLocation();
  const isFavorites = location.pathname.includes('favorites');
  return (
    <div className="header">
      🛍️ Mini Shop
      <div className="nav-links">
        <NavLink to="/" className={isFavorites ? 'nav-item' : 'nav-active'}>
          Products
        </NavLink>
        <NavLink
          to="/favorites"
          className={isFavorites ? 'nav-active' : 'nav-item'}
        >
          Favorites
        </NavLink>
        <div className="fav-amount">({favoritesAmount})</div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
