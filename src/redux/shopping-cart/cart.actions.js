import shoppingCartTypes from "./cart.types";

export const addItem = item => ({
  type: shoppingCartTypes.ADD_ITEMS,
  payload: item,
});
