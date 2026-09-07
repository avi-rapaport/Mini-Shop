import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useFavoritesStore } from '../store/favoritesStore';

const Header = () => {
  const favoritesAmount = useFavoritesStore((state) => state.favorites).length;
  return (
    <div className="header">
      🛍️ Mini Shop
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-active' : 'nav-item')}
        >
          Products
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? 'nav-active' : 'nav-item')}
        >
          Favorites ({favoritesAmount})
        </NavLink>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
