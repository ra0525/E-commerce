import React, { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const initialState = {
  wishlistItems: [],
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.wishlistItems.some(item => item.id === action.payload.id)) {
        return state; // Already in wishlist
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState, (initial) => {
    const localData = localStorage.getItem('wishlistItems');
    return localData ? { wishlistItems: JSON.parse(localData) } : initial;
  });

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
  }, [state.wishlistItems]);

  const addToWishlist = product => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = id => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  const getTotalWishlistItems = () => {
    return state.wishlistItems.length;
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems: state.wishlistItems,
        addToWishlist,
        removeFromWishlist,
        getTotalWishlistItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
