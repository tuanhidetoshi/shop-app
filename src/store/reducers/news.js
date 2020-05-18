import { FETCH_NEWS } from "../actions/news";

const initialState = {
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
