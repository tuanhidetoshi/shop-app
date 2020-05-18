export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELTE_CART = "DELETE_CART";

export const addCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const deleteCart = (id) => ({
  type: DELTE_CART,
  payload: id,
});
