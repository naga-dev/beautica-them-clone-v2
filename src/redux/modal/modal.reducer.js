import MODAL_TYPES from "./modal.types";

const INITIAL_STATE = {
  hiddenModal: true,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_TYPES.TOGGLE_HIDDEN_MODAL:
      return {
        hiddenModal: !state.hiddenModal,
      };
    default:
      return state;
  }
};

export default modalReducer;
