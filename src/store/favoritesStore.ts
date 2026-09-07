import { create } from 'zustand';
import type { Product } from '../types/product';

interface FavoritesStore {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: JSON.parse(localStorage.getItem('favoritesProducts') ?? '[]'),
  addFavorite: (product) =>
    set((state) => {
      const updated = [...state.favorites, product];
      localStorage.setItem('favoritesProducts', JSON.stringify(updated));
      return { favorites: updated };
    }),
  removeFavorite: (id) =>
    set((state) => {
      const updated = state.favorites.filter((p) => p.id !== id);
      localStorage.setItem('favoritesProducts', JSON.stringify(updated));
      return { favorites: updated };
    }),
}));
