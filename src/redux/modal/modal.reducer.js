import MODAL_TYPES from "./modal.types";

const INITIAL_STATE = {
  hiddenModal: true,
  content: {},
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_TYPES.OPEN_MODAL:
      return {
        hiddenModal: true,
      };
    case MODAL_TYPES.TOGGLE_HIDDEN_MODAL:
      return {
        hiddenModal: !state.hiddenModal,
      };
    case MODAL_TYPES.GET_MODAL_CONTENT:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
