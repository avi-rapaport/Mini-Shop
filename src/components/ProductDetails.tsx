import { useNavigate } from 'react-router-dom';
import type { ProductCardProps } from '../types/product';
import { useFavoritesStore } from '../store/favoritesStore';

const ProductDetails = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorites = useFavoritesStore((state) => state.addFavorite);
  const removeFavorites = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = favorites.some((f) => Number(f.id) === Number(product.id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorites(product.id);
    } else {
      addFavorites(product);
    }
  };

  return (
    <div className="details-page">
      <div className="image-wrapper">
        <img className="details-image" src={product.image} alt="image" />
      </div>
      <div className="details-info">
        <h1>{product.title}</h1>

        <h4 className="details-category">🏷️ {product.category}</h4>
        <h1 className="details-price">${product.price}</h1>
        <p className="details-desc">{product.description}</p>

        <div className="details-buttons">
          <button
            onClick={handleToggleFavorite}
            className="details-btn add-btn"
          >
            {isFavorite ? '❤️ Remove from favorites' : '🤍  Add to favorites'}
          </button>
          <button
            className="details-btn back-btn"
            onClick={() => navigate('/')}
          >
            Back to products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
