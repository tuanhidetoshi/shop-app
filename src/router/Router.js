import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import NewsDetail from "../pages/NewsDetail";
import Order from "../pages/Order";
import Shop from "../pages/Shop";
import notFound from "../pages/404";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/news" component={News} />
        <Route path="/news/{id}" component={NewsDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/order" component={Order} />
        <Route path="/shop" component={Shop} />
        <Route component={notFound} />
      </Switch>
      <Footer />
    </Router>
  );
};
