import { combineReducers } from "redux";
import cardMenuReducer from "./card-menu/card-menu.reducer";

const rootReducer = combineReducers({
  toggleCardHidden: cardMenuReducer,
});

export default rootReducer;
