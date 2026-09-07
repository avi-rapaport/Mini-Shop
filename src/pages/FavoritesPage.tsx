import FavoritesList from '../components/FavoritesList';
import { useFavoritesStore } from '../store/favoritesStore';

const FavoritesPage = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (!favorites || favorites.length === 0) {
    return <h1 className="empty-message">Favorites list is empty!</h1>;
  }

  return (
    <div className="fav-page">
      <h1 className="fav-headline">Favorites</h1>
      <FavoritesList products={favorites} />
    </div>
  );
};

export default FavoritesPage;
