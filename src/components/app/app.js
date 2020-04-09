import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withStoreService from '../hoc';

import { Home, Cart } from '../pages';

const App = (props) => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/cart' component={Cart} />
            <Route render={() => <div><h1>404</h1><p>Page does not exist...</p></div>} />
        </Switch>
    );
}

export default withStoreService()(App);