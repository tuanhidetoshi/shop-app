import { createStore, combineReducers } from "redux";

import shopReducer from "./reducers/shop";
import newReducer from "./reducers/news";
import cartReducer from "./reducers/cart";

export default () => {
  const reducers = combineReducers({
    shop: shopReducer,
    news: newReducer,
    cart: cartReducer,
  });
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
