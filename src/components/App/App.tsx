import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Feed from '../Feed';
import icon from '../../../assets/icon.svg';

const Hello = () => {
    return (
        <div>
            <div className="Hello">
                <img width="200px" alt="icon" src={icon} />
            </div>
            <h1>YO YO-react-boilerplate</h1>
            <Feed />
        </div>
    );
};

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Hello} />
            </Switch>
        </Router>
    );
}
