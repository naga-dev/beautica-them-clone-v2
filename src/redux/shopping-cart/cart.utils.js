export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingItem) {
    cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
