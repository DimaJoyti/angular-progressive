export const MODAL_SHOW = "MODAL_SHOW";

export const modal = (state = {}, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      if (action.payload) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
};
