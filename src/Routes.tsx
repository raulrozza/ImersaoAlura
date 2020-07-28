import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/cadastro/video" component={NewVideo} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
