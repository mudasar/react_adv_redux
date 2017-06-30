import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';

import { courseReducer } from './courseReducer';
import { authorReducer } from './authorReducer';
import {ajaxStatusReducer} from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorReducer,
    ajaxCallsInProgress: ajaxStatusReducer,
    router: routerReducer
});

export default rootReducer;