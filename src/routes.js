import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Shoppingcart from './pages/Shoppingcart';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/shoppingcart" component={Shoppingcart}/>
            </Switch>
        </BrowserRouter>
    );    
}
