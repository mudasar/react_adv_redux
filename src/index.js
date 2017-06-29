import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter } from 'react-router-redux';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as history from './history';
import configureStore from './store/configureStore';

const store = configureStore({});

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

ReactDOM.render(
    <Provider store={store}>

    <Router history={history}>
        <App/>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
