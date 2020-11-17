import MODAL_TYPES from "./modal.types";

export const openModal = () => ({
  type: MODAL_TYPES.OPEN_MODAL,
});

export const closeModal = () => ({
  type: MODAL_TYPES.TOGGLE_HIDDEN_MODAL,
});

export const getModalContent = item => ({
  type: MODAL_TYPES.GET_MODAL_CONTENT,
  payload: item,
});
