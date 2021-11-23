import React from 'react';
import { Switch, Route } from 'react-router';

import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/catalog/:slug" component={Product} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  )
}
export default Routes
