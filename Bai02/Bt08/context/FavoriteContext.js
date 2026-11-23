
import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext(null);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (place) => {
    setFavorites(current => {
      const exists = current.some(item => item.id === place.id);

      if (exists) {
        return current.filter(item => item.id !== place.id);
      }

      return [...current, place];
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}
