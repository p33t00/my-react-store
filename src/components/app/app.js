import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withStoreService from '../hoc';

import ShoppingHeader from "../shopping-header";

import { Home, Cart } from '../pages';
import './app.css';

const App = (props) => {
    return (
		<div className="app">
			<ShoppingHeader />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} />
				<Route
					render={() => (
						<div>
							<h1>404</h1>
							<p>Page does not exist...</p>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
}

export default withStoreService()(App);