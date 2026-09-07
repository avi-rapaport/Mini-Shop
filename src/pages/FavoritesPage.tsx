import FavoritesList from '../components/FavoritesList';
import { useFavoritesStore } from '../store/favoritesStore';

const FavoritesPage = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <div className="favorites-page">
      <h1 className="favorites-headline">Favorites</h1>
      <FavoritesList products={favorites} />
    </div>
  );
};

export default FavoritesPage;
