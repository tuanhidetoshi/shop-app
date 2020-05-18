import { ADD_TO_CART, REMOVE_FROM_CART, DELTE_CART } from "../actions/cart";

const initialState = {
  cart: [],
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartItem = action.payload;

      // Neu chua co trong cart
      if (state.cart.every((item) => item.id !== newCartItem.id)) {
        return {
          ...state,
          cart: [...state.cart, newCartItem],
          totalAmount: state.totalAmount + newCartItem.price,
        };
      }

      //Neu da co trong cart
      else {
        const itemIndex = state.cart.findIndex(
          (item) => item.id === newCartItem.id
        );
        return {
          ...state,
          ...(state.cart[itemIndex].quantity += 1),
          totalAmount: state.totalAmount + newCartItem.price,
        };
      }
    case REMOVE_FROM_CART:
      const targetCartItem = state.cart.find(
        (item) => item.id === action.payload
      );

      // Neu lon hon 1 thi giam
      if (targetCartItem.quantity > 1) {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload
        );
        return {
          ...state,
          ...(state.cart[index].quantity -= 1),
          totalAmount: state.totalAmount - targetCartItem.price,
        };
      }

      // Con lai thi xoa khoi
      else {
        const newCart = state.cart.filter((item) => item.id !== action.payload);
        return {
          ...state,
          cart: newCart,
          totalAmount: state.totalAmount - targetCartItem.price,
        };
      }
    case DELTE_CART:
      const targetCart = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        totalAmount: state.totalAmount - targetCart.price * targetCart.quantity,
      };

    default:
      return state;
  }
};
