import { combineReducers } from "redux";
import cardMenuReducer from "./card-menu/card-menu.reducer";
import modalReducer from "./modal/modal.reducer";
import cartReducer from "./shopping-cart/cart.reducer";

const rootReducer = combineReducers({
  toggleCardHidden: cardMenuReducer,
  modal: modalReducer,
  cartItems: cartReducer,
});

export default rootReducer;
