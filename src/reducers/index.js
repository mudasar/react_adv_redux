import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';

import { courseReducer } from './courseReducer';
import { authorReducer } from './authorReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorReducer,
    router: routerReducer
});

export default rootReducer;