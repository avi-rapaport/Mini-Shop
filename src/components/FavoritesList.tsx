import { Trash } from 'lucide-react';
import { useFavoritesStore } from '../store/favoritesStore';
import type { FavoritesListProps } from '../types/product';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

const FavoritesList = ({ products }: FavoritesListProps) => {
  const removeFavorites = useFavoritesStore((state) => state.removeFavorite);
  const navigate = useNavigate();
  return (
    <div className="fav-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="fav-card"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <div className="fav-image-wrapper">
            <div className="fav-heart">❤️</div>
            <img className="fav-image" src={product.image} alt="image" />
          </div>
          <h3 className="fav-title">{product.title}</h3>
          <h4 className="fav-price">${product.price}</h4>
          <button
            className="fav-btn"
            onClick={(e) => {
              e.stopPropagation();
              removeFavorites(product.id);
            }}
          >
            <Trash size={20} />
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default memo(FavoritesList);
