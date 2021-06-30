import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shoppingcart from './pages/Shoppingcart';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shoppingcart" component={Shoppingcart}/>
            </Switch>
        </BrowserRouter>
    );    
}
