import CARD_MENU_TYPES from "./card-menu.types";

const INITIAL_STATE = {
  hidden: false,
};

const cardMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_MENU_TYPES.TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cardMenuReducer;
