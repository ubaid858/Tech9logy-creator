import * as UserActionTypes from "@redux/actionTypes/userActionTypes";

export const setName = (name) => ({
  type: UserActionTypes.SET_NAME,
  payload: name,
});
export const setCart = (cart) => ({
  type: UserActionTypes.SET_CART,
  payload: cart,
});
export const setFavCart = (favCart) => ({
  type: UserActionTypes.SET_CART,
  payload: favCart,
});
