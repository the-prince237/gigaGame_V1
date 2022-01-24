import {useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newCartItem) => {
    !cart.includes(newCartItem) && setCart([...cart, newCartItem]);
  }

  const removeFromCart = (removedCartItem) => {
    let otherItems = cart.filter((item) => item.id !== removedCartItem.id);
    otherItems.length === 0 ? setCart([]) : setCart(otherItems);
    
  }

  return(
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (newItem) => {
    !favorites.includes(newItem) && setFavorites([...favorites, newItem]);
  }

  const removeFromFavorites = (removedItem) => {
    let otherItems = favorites.filter((item) => item.id !== removedItem.id);
    otherItems.length === 0 ? setFavorites([]) : setFavorites(otherItems);
  }

  return(
    <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
}