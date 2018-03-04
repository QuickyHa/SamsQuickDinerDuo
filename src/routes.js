import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import WelcomePage from './components/welcome/WelcomePage';
import HomePage from './components/home/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="home" component={HomePage} />
    </Route>
);