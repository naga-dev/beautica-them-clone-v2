import CARD_MENU_TYPES from "./card-menu.types";

export const toggleCardMenuHidden = hidden => ({
  type: CARD_MENU_TYPES.TOGGLE_CARD_HIDDEN,
  payload: hidden,
});
