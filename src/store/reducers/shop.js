import { FETCH_SHOP } from "../actions/shop";

const initialState = {
  shop: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOP:
      return {
        ...state,
        shop: action.payload,
      };
    default:
      return state;
  }
};
