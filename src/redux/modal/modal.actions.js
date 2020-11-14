import MODAL_TYPES from "./modal.types";

export const closeModal = () => ({
  type: MODAL_TYPES.TOGGLE_HIDDEN_MODAL,
});
