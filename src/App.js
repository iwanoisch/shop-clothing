import React from 'react';

import './App.css';
import HomePage from "./pages/homepage/hompage.component";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
