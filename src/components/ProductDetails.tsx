import { useNavigate } from 'react-router-dom';
import type { ProductCardProps } from '../types/product';

const ProductDetails = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={product.image} alt="image" />
      <div>
        <h1>{product.title}</h1>
        <h4>🏷️ {product.category}</h4>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <div>
          <button></button>
          <button onClick={() => navigate('/')}>Back to products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
