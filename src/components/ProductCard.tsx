import { useNavigate } from 'react-router-dom';
import type { ProductCardProps } from '../types/product';
import { useFavoritesStore } from '../store/favoritesStore';
import React, { memo, useCallback } from 'react';

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const isFavorite = favorites.some((f) => Number(f.id) === Number(product.id));

  const handleToggleFavorite = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isFavorite) {
        removeFavorite(Number(product.id));
      } else {
        addFavorite(product);
      }
    },
    [isFavorite, product, addFavorite, removeFavorite]
  );

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="card-img-wrapper">
        <img src={product.image} alt="image" className="card-img" />
      </div>
      <div className="card-details">
        <div className="card-info">
          <p className="card-title">{product.title}</p>
          <p className="card-price">$ {product.price}</p>
        </div>
        <div className="toggle-fav" onClick={handleToggleFavorite}>
          {isFavorite ? '❤️' : '🤍'}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
