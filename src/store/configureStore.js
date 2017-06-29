import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';
import {  routerMiddleware } from 'react-router-redux';


import rootReducer from '../reducers';
import { history } from '../history';

export default function configure(initialState) {
    return createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk),
        applyMiddleware(reduxImmutableStateVariant()),
        applyMiddleware(routerMiddleware(history)),
        window.devToolsExtension ? window.devToolsExtension() : f=> f
    ));
}