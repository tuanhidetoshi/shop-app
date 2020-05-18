import React, { useEffect } from "react";
import "./_App.scss";
import { useDispatch } from "react-redux";
import { fetchShop } from "./store/actions/shop";
import { fetchNews } from "./store/actions/news";

import RouterController from "./router/Router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShop());
    dispatch(fetchNews());
  }, [dispatch]);

  return <RouterController />;
}

export default App;
