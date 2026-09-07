import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import type { Product } from '../types/product';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  const { data: product, loading, error } = useFetch<Product>(url);

  if (loading) return <h1>Loading products...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!product) return <h1>Product not found!</h1>;

  return <ProductDetails product={product} />;
};

export default ProductPage;
