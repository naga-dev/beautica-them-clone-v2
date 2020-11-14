import { combineReducers } from "redux";
import cardMenuReducer from "./card-menu/card-menu.reducer";
import modalReducer from "./modal/modal.reducer";

const rootReducer = combineReducers({
  toggleCardHidden: cardMenuReducer,
  modal: modalReducer,
});

export default rootReducer;
