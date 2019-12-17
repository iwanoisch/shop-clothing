import React from 'react';

import './App.css';
import HomePage from "./pages/homepage/hompage.component";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
