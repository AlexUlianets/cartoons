import React from 'react';
import { connect } from 'react-redux';
import {Router, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import { history } from '../_helpers';
import {ListPage} from "../ListPage";



class App extends React.Component {
    render() {
        return (
            <Router history={history} >
                <div>
                    <Switch>
                        <Route path="/" component={ListPage} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

App.proptypes = {
    location: PropTypes.object.isRequired,
};


const connectedApp = connect()(App);
export { connectedApp as App };