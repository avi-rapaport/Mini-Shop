import { Trash } from 'lucide-react';
import { useFavoritesStore } from '../store/favoritesStore';
import type { FavoritesListProps } from '../types/product';

const FavoritesList = ({ products }: FavoritesListProps) => {
  const removeFavorites = useFavoritesStore((state) => state.removeFavorite);
  return (
    <div className="fav-list">
      {products.map((product) => (
        <div key={product.id} className="fav-card">
          <div className="fav-image-wrapper">
            <div className="fav-heart">❤️</div>
            <img className="fav-image" src={product.image} alt="image" />
          </div>
          <h3 className="fav-title">{product.title}</h3>
          <h4 className="fav-price">${product.price}</h4>
          <button
            className="fav-btn"
            onClick={() => removeFavorites(product.id)}
          >
            <Trash size={20} />
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
