import * as UserActionTypes from '../actionTypes/userActionTypes';

const initialState = {
  name: "Redux in Name",
  cart: [],
  favCart: [],
};

const user = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {

    case UserActionTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case UserActionTypes.SET_CART:
      return {
        ...state,
        cart: payload,
      };
    case UserActionTypes.SET_FAVCART:
      return {
        ...state,
        favCart: payload,
      };

    default:
      return state;
  }
};

export default user;